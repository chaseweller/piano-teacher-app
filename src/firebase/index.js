import Rebase from 're-base';

const config = {
  apiKey: "AIzaSyBqMAViTzRr16PTcpYi10fgHqoDvjM8pD0",
  authDomain: "piano-teacher-2d8f0.firebaseapp.com",
  databaseURL: "https://piano-teacher-2d8f0.firebaseio.com",
  projectId: "piano-teacher-2d8f0",
  storageBucket: "piano-teacher-2d8f0.appspot.com",
  messagingSenderId: "290432959372"
};

export default Rebase.createClass(config, 'piano-teacher');

