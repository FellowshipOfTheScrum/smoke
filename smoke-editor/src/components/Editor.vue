<template>
  <section>
    <a class="button is-small is-pulled-right">
      <template v-if="windowSize==='maximum'">
        <span class="icon is-small " v-on:click="shrinkWindow()">
          <font-awesome-icon icon="window-minimize" />
        </span>
      </template>
      <template v-else>
        <span class="icon is-small " v-on:click="growWindow()">
          <font-awesome-icon icon="window-maximize" />
        </span>
      </template>
    </a>
    <div class="columns">
      <div class="column"></div>
      <template v-if="windowSize==='maximum'">
        <div class="column is-full">
          <editor style="height: 500px"
                  theme="github"
                  :lang="selectedLanguage.tag"
                  v-model="content"
                  @init="editorInit">
          </editor>
          <b-dropdown v-model="selectedLanguage">
            <button
              slot="trigger"
              class="button is-primary">
              <span>{{ selectedLanguage.name }}</span>
              <b-icon icon="menu-down"/>
            </button>

            <b-dropdown-item
              v-for="lang in languages"
              :value="lang"
              :key="lang.name">
              {{ lang.name }}
            </b-dropdown-item>
          </b-dropdown>
          <button
            class="button is-primary"
            @click="submit">
            Test
          </button>
        </div>
      </template>
      <template v-else>
        <div class="column is-half">
          <editor style="height: 250px"
                  theme="github"
                  :lang="selectedLanguage.tag"
                  v-model="content"
                  @init="editorInit">
          </editor>
          <b-dropdown v-model="selectedLanguage">
            <button
              slot="trigger"
              class="button is-primary">
              <span>{{ selectedLanguage.name }}</span>
              <b-icon icon="menu-down"/>
            </button>

            <b-dropdown-item
              v-for="lang in languages"
              :value="lang"
              :key="lang.name">
              {{ lang.name }}
            </b-dropdown-item>
          </b-dropdown>
          <button
            class="button is-primary"
            @click="submit">
            Test
          </button>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import { API_URL } from '@/definitions'
  let languages = [
    {
      name: 'Python 2',
      tag: 'python'
    },
    {
      name: 'Python 3',
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
  export default {
    components: {
      editor: require('vue2-ace-editor')
    },
    methods: {
      growWindow: function () {
        this.windowSize = 'maximum'
        this.windowHeight = 500
      },
      shrinkWindow: function () {
        this.windowSize = 'minimum'
        this.windowHeight = 250
      },
      editorInit () {
        require('brace/ext/language_tools')
        require('brace/theme/github')
        languages.forEach((lang) => require('brace/mode/' + lang.tag))
      },
      async submit () {
        await axios.post(API_URL + '/api/v1/test', {
          code: window.btoa(this.content)
        }, {
          headers: {
            Authorization: `Bearer ${this.$store.state.auth.access_token}`
          }
        })
      }
    },
    data: function () {
      return {
        windowSize: 'maximum',
        windowHeight: 500,
        languages: languages,
        selectedLanguage: languages[0],
        content: ''
      }
    }
  }
</script>
