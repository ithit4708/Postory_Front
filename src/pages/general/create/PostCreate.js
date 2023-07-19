import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useApiGet, useApiPost, useConditionalApiGet } from '../../../hooks/useApi';
import CreateTemplate from '../../../components/templates/general/CreateTemplate';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextInputSC from '../../../components/atoms/Input/TextInputSC';
import ImageResize from 'quill-image-resize';
import PostRadioButton from '../../../components/molecules/post/PostRadioButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import PostImg from '../../../components/atoms/Post/PostImgSC';

Quill.register('modules/imageResize', ImageResize);
export const SubmitButton = styled.button`
  display: block;
  width: fit-content;
  padding: 8px 30px;
  font-size: 15px;
  border-radius: 4px;
  font-weight: normal;
  color: white;
  background-color: #3478FF;
  border: 1px solid #3478FF;
`;

export const PostImgInputSC = styled.input`
  display: inline-block;
  padding: 8px 30px;
  font-size: 15px;
  border-radius: 4px;
  font-weight: normal;
  color: white;
  background-color: #3478FF;
  border: 1px solid #3478FF;
  cursor: pointer;
  margin-left: 10px; // 이미지와 버튼 사이에 간격을 주기 위함
`;

export const ImageContainerSC = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;


export default function PostCreate() {
  Quill.register('modules/imageResize', ImageResize);
  const { user } = useUserStore();
  const { chnlUri } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState('');
  const [postType, setPostType] = useState('');
  const [postId, setPostId] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const quillRef = useRef();
  const imageData = new FormData();
  const thumnData = new FormData();

  const {
    res: postRes,
    error: postErr,
    setError: setPostErr,
    postData: post,
  } = useApiPost(`post/create`, {
    postType: postType,
    postTtl: title,
    postSbTtl: subTitle,
    postContent: content,
    postThumnPath: thumbnailImageUrl,
    imageUrls: imageUrls,
  });
  const {
    res: postEditRes,
    error: postEditErr,
    setError: setPostEditErr,
    postData: postEdit,
  } = useApiPost(`post/${postId}/edit`, {
    postType: postType,
    postTtl: title,
    postSbTtl: subTitle,
    postContent: content,
    postThumnPath: thumbnailImageUrl,
    imageUrls: imageUrls,
  });


  const {
    res: uploadRes,
    error: uploadErr,
    setError: setUploadErr,
    postData: upload,
  } = useApiPost(`file/uploadFiles`, {imageData: imageData});
  const {
    res: uploadThumRes,
    error: uploadThumnErr,
    setError: Err,
    postData: uploadThumn,
  } = useApiPost(`file/uploadThumn`, {thumnData: thumnData});


  const { data, isLoading, error } = useConditionalApiGet(`/post/${postId}`, postId);
  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    input.addEventListener('change', async () => {
      const files = input.files;
      // multer에 맞는 형식으로 데이터 만들어준다.
      Array.prototype.forEach.call(files, function(file) {
        imageData.append('multipartFiles',file);
      });

      await upload(imageData);
    });
  };


  // 이미지 업로드 input의 onChange
  const saveImgFile = async () => {
    if(imgRef.current.files.length > 0) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
        console.log(imgFile);

      };
      console.log("file",file);
      thumnData.append("file", file);
      console.log("thumnData", thumnData);
      await uploadThumn(thumnData);
    } else {
      console.warn('No file selected');
    }
  };

  const modules = useMemo(() => {

    return {
      toolbar: {
        container: [
          [{ 'header': [1, 2, false] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],  // 새로운 글자 크기 조절 옵션
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'align': [] }],  // 새로운 텍스트 정렬 옵션
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image'],
          ['clean']
        ],
        handlers: {
          image: imageHandler,
        },
        imageResize: {}
      },
    }
  },[]);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'align', 'list', 'bullet', 'indent',
    'link', 'image',
    'size'
  ]
  useEffect(() =>{
    setPostId(queryParams.get('postId'));
    console.log(postId);
  }, [])


  useEffect(() =>{
    if (uploadThumRes !== null){
      // setThumbnailImageUrl(process.env.REACT_APP_PUBLIC_URL+uploadThumRes.data.url);
      setThumbnailImageUrl(uploadThumRes.data.url);
    }
  }, [uploadThumRes])

  useEffect(() => {
    if (uploadRes !== null) {

      const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기

      uploadRes.data.urls.forEach((imgUrl) => {

          let range = editor.getSelection();
          // editor.insertEmbed(range.index, 'image', process.env.REACT_APP_PUBLIC_URL+imgUrl);
        editor.insertEmbed(range.index, 'image', imgUrl);

          // setImageUrls((prevImageUrls) => [...prevImageUrls, process.env.REACT_APP_PUBLIC_URL+imgUrl]);
        setImageUrls((prevImageUrls) => [...prevImageUrls, imgUrl]);
        }
      )

    }
  }, [uploadRes]);

  useEffect(() =>{
    if(postRes != null){
      console.dir(postRes);
    }
  })



  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubTitleChange = (event) =>{
    setSubTitle(event.target.value);
  }

  const handleOptionChange = (event) => {
    setPostType(event.target.value);
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
    const delta = editor.getContents();  // 현재 문서의 내용을 가져오기
    setContent(JSON.stringify(delta)); // Quill 에디터의 내용을 Delta 형식의 JSON 문자열로 설정


    const imagePathes = delta.ops
      .filter(op => typeof op.insert === 'object' && op.insert.image)
      .map(op => op.insert.image);

    setImageUrls(imagePathes);
    const postData = {
      chnlUri: chnlUri,
      postType: postType,
      postTtl: title,
      postSbTtl: subTitle,
      postContent: content,
      postThumnPath: thumbnailImageUrl,
      imageUrls: imageUrls
    };
    // API 호출 등의 로직을 추가합니다.

    if (postId !== null){
      // 포스트 수정을 위한 postApi
      await postEdit(postData);

    } else {
      // 포스트 생성을 위한 postApi
      await post(postData);
    }

    navigate(`/channel/${chnlUri}`);
  };

  const options = [
    { label: '웹툰', value: '웹툰' },
    { label: '웹소설', value: '웹소설' },
  ];

  useEffect(() => {
    if (data && data.post) {
      setTitle(data.post.postTtl || '');
      setContent(data.post.postContent || '');
      setSubTitle(data.post.postSbTtl || '');
      setThumbnailImageUrl(data.post.postThumnPath || '');
      setPostType(data.post.postType || '');
      setImageUrls([...data.post.imageUrls])
    }
  }, [data]);

  if (isLoading) return;
  if (error) return <span>{`[${error.code}] ${error.message}`}</span>;


  return (
    <CreateTemplate>
      <div>
        <form onSubmit={handleFormSubmit}>
          <h3 style={{ marginBottom : '30px' }}>포스트 작성하기</h3>
          <ImageContainerSC>
            <PostImg src={imgFile} onClick={() => imgRef.current.click()} />
            <PostImgInputSC
              type={"file"}
              accept={"image/*"}
              onChange={saveImgFile}
              ref={imgRef}
              style={{ display: 'none' }}  // input 요소를 숨김
            />
            <p style={{ marginLeft: '20px', marginBottom : '10px', fontSize : '16px', fontWeight : 'bold'  }}>썸네일을 선택해 주세요!</p>
          </ImageContainerSC>
          <div style={{ height: '20px' }}></div>
          <p style={{ marginBottom : '10px', fontSize : '16px', fontWeight : 'bold'  }}>포스트 타입</p>
          <PostRadioButton
            options={options}
            selectedOption={postType}
            handleOptionChange={handleOptionChange}
          />

          <div style={{ margin: '20px'}}></div>
          <TextInputSC
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleTitleChange}
          />
          <div style={{ margin: '20px'}}></div>

          <TextInputSC
            type="text"
            placeholder="부제목"
            value={subTitle}
            onChange={handleSubTitleChange}
            onKeyDown={handleSubTitleChange}
          />
          <div style={{ height: '500px', margin: '20px 0 50px 0' }}>
            <ReactQuill ref={quillRef} value={content} onChange={handleEditorChange} style={{ height: '500px' }} modules={modules} formats={formats}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SubmitButton type="submit">{postId !==null ? "수정" : "발행"}</SubmitButton>
          </div>
        </form>
      </div>
    </CreateTemplate>
  );
}
