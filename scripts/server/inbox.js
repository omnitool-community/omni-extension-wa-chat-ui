

const inbox= [
  {
    id: "System",
    name: "System",
    image: "/omni.png",
    lastMessage: "At your service!",
    notificationsCount: 1,
    messageStatus: "READ",
    timestamp: "08:21",
    isPinned: true,
  }/*,
  {
    id: "d79a4052-5937-4df2-8328-21d3d2192db2",
    name: "George VI - The Toastmaster Coach",
    image: "/toastmaster.png",
    lastMessage: "Your Coach is ready to help you with your next speech.",
    notificationsCount: 2,
    messageStatus: "SENT",
    timestamp: "12:15",
    isPinned: true,
    isOnline: true,
  },
  {
    id: "ecdae877-d7e0-49e2-95fe-a3833f6eb5fb",
    name: "Children's Book Author",
    image: "/librarian.png",
    lastMessage: "Ready for another story?",
    notificationsCount: 0,
    messageStatus: "DELIVERED",
    timestamp: "6:47",
  },*/

];


const script = {
  name: 'inbox',

  exec: async function (ctx, payload) {
    const sessionId = ctx.sessionId;

    return {
      inbox: inbox.map((item) => {
        item.lastMessage = item.lastMessage.length<25 ? item.lastMessage :  item.lastMessage.substring(0, 22)+"...";
        return  item
      }),
      user:
      {
        name: "John Smith",
        image: "/omni.png"
      }
    }
  }

}
export default script