const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  // const socketUrl = 'http://localhost:3000';
  const socketUrl = 'https://webrtc-server-vp.herokuapp.com';
  const socketBuilder = new SocketBuilder({ socketUrl });

  const peerConfig = Object.values({
    id: undefined,
    config: {
      host: 'vp-peer-server.herokuapp.com',
      secure: true,
      // port: 9000,
      // host: 'localhost',
      path: '/'
    }
  });

  const peerBuilder = new PeerBuilder(peerConfig);

  const view = new View();
  const media = new Media();

  const deps = {
    view, 
    media, 
    room, 
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps);
  // view.renderVideo({ userId: 'teste01', url: 'https://media.giphy.com/media/fEYkIHnX4WoXQw2OfX/giphy.mp4'})

}

window.onload = onload