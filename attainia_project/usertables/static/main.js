
$.getJSON("http://localhost:8000/usertables/users", 
  function(data) {

    Vue.component('usertable', {
      template:`
        <div>
          <table>
            <tr>
              <td>ID</td>
              <td>Username</td>
              <td>Last Login</td>
              <td>Login Count</td>
              <td>Project Count</td>
            </tr>
            <tr v-for="user in users"
              :class="{[highlight]: buttonOn && 
              (((user.login_count === 0) && showzeroes) ||
              ((user.login_count >= 1) && !showzeroes))}">
              <td>{{user.id}}</td>
              <td>{{user.username}}</td>
              <td>{{user.last_login}}</td>
              <td>{{user.login_count}}</td>
              <td>{{user.project_count}}</td>
            </tr>
          </table>
          </br>
          <button @click="showLoginCount">Highlight rows!</button>
        </div>
      `,
      props: ['highlight', 'showzeroes'],
      data() {
        return {
          buttonOn: false,
          users: data
        }
      },
      methods: {
        showLoginCount: function () {
          this.buttonOn = !this.buttonOn;
        }
      },
    });

    new Vue({
      el: '#app'
    });
  });



