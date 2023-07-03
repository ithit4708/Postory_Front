import { create } from 'zustand';

const useUserChannelStore = create((set) => ({
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
        channel.id === updatedChannel.id ? updatedChannel : channel
      );
      return { ...state, channels: updatedChannels };
    });
  },
  removeChannel: (channelId) => {
    set((state) => ({
      ...state,
      channels: state.channels.filter((channel) => channel.id !== channelId),
    }));
  },
}));

export default useUserChannelStore;
