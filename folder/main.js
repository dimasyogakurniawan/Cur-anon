
var firebaseConfig = {
  apiKey: "AIzaSyBfmq1tBY-rWfZ-mLpfDKLKLf4RslQ8VLs",
  authDomain: "note-f202e.firebaseapp.com",
  databaseURL: "https://note-f202e-default-rtdb.firebaseio.com",
  projectId: "note-f202e",
  storageBucket: "note-f202e.appspot.com",
  messagingSenderId: "687028555468",
  appId: "1:687028555468:web:d62a1d2c78d88def5d3c69",
  measurementId: "G-FQJCV9C960"
};

firebase.initializeApp(firebaseConfig);

      // referensi database
      var database = firebase.database();

      // referensi data
      var dataRef = database.ref('note');
      
      function save() {
          var title = document.getElementById("title").value;
          var content = document.getElementById("content").value;

          dataRef.push({
              title: title,
              content: content
              
          });
      }

      // memuat data
      dataRef.on('value', function(snapshot) {
        var container = document.getElementById('container');
        container.innerHTML = '';
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          var box = document.createElement('div');
          box.className = 'box';
          box.innerHTML = '<h3>' + childData.title + '</h3><p>' + childData.content + '</p>';
          container.appendChild(box);
        });
      });

