<template>
  <section>
    <div class = "columns"> <!--Starts columns-->
      <div v-if="height === 250px" class = "column"> <!--Left Auto column-->
          <!--This makes the left side column Auto-Adjust to shrink or expand-->
      </div>

      <!--"is-half" was added to make editor half window-->
      <!--when it is "is-full" the button goes to far right into margin-->
      <div class = "column is-half"> <!--Right column-->
        <div class = "editor">
          <b-dropdown v-model="selectedLanguage">
            <button slot="trigger" class="button is-primary">
              <span>{{ selectedLanguage.name }}</span>
              <b-icon icon="arrow-down"/>
            </button>

            <b-dropdown-item v-for="lang in languages"
                             v-bind:value="lang"
                             v-bind:key="lang.name">
              {{ lang.name }}
            </b-dropdown-item>
          </b-dropdown>

          <!--This is the Resize button-->
          <div class = "button is-small is-warning is-pulled-right">
                <span class="icon">
                  <i class="fas window-minimize"></i> <!--Somehow doesn't show the icon-->
                </span>
          </div>

          <!--Here is another Resize button-->
          <div class="button is-small is-pulled-right is-rounded is-outlined is-danger">
            <input id="switchExample" type="checkbox" name="switchExample" class="switch" checked="checked">
          </div>

          <!--I added width, might need to add right margin-->
          <brace style="height: 500px; width: 1400px"
                 :fontsize="'12px'"
                 :theme="'github'"
                 :mode="selectedLanguage.tag"
                 :codefolding="'markbegin'"
                 :softwrap="'free'"
                 :selectionstyle="'text'"
                 :highlightline="true">
          </brace>
        </div>
      </div>

    </div>

    </div>
  </section>
</template>



<script>
  import Vue from 'vue'
  import Brace from 'vue-bulma-brace'
  import Buefy from 'buefy'
  // import 'buefy/lib/buefy.css'
  Vue.use(Buefy)
  export default{
    components: {
      Brace
    },
    data: function () {
      let languages = [
        {
          name: 'Python 3',
          tag: 'python'
        },
        {
          name: 'Python 2',
          tag: 'python'
        },
        {
          name: 'Ruby',
          tag: 'ruby'
        },
        {
          name: 'Java',
          tag: 'java'
        },
        {
          name: 'JavaScript',
          tag: 'javascript'
        }
      ]
      return {
        languages: languages,
        selectedLanguage: languages[0]
      }
    }
  }
</script>
