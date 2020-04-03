const github = new Github();
const ui = new UI();

document.getElementById("searchUser").addEventListener('keyup', searchUser)

function searchUser(e) {
  let userText = document.getElementById("searchUser").value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // show alert Message not found
          ui.showAlert("User Not Found", "alert alert-danger")
        }
        else {
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)

        }
      })

  }
  else {
    ui.clearProfile()
  }

}
