import { create } from 'zustand';

const useSubChannelList = create((set) => ({
  channels: [],

  // 로그인 유저의 모든 채널 세팅
  setChannels: (newChannels) => {
    set((state) => ({ ...state, channels: newChannels }));
  },

  // 채널 하나 설정
  createChannel: (newChannel) => {
    set((state) => ({
      ...state,
      channels: [...state.channels, newChannel],
    }));
  },
  updateChannel: (updatedChannel) => {
    set((state) => {
      const updatedChannels = state.channels.map((channel) =>
        channel.chnlId === updatedChannel.chnlId ? updatedChannel : channel
      );
      return { ...state, channels: updatedChannels };
    });
  },
  removeChannel: (channelId) => {
    set((state) => ({
      ...state,
      channels: state.channels.filter(
        (channel) => channel.chnlId !== channelId
      ),
    }));
  },
}));

export default useSubChannelList;
