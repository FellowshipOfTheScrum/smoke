<template>
  <div>
    <div class="dropdown is-active"><!--if "is-active" is removed, the menu is closed-->
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Select Program</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            item
          </a>
          <a href="#" class="dropdown-item">
            item
          <a href="#" class="dropdown-item is-active"><!--Active-->
            item
          </a>
          </a>
          <a href="#" class="dropdown-item">
            item
          </a>
        </div>
      </div>
    </div>
    <p>Selected Program: <span>{{activeProgram}}</span></p>
    <brace style="height: 500px"
      :fontsize="'12px'"
      :theme="'github'"
      :mode="'python'"
      :codefolding="'markbegin'"
      :softwrap="'free'"
      :selectionstyle="'text'"
      :highlightline="true">
    </brace>
  </div>
</template>

<script>
// To control button's behavior: open or close
'use strict'
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown
  var $dropdown = getAll('.dropdown:not(.is-active)')
  if ($dropdown.length > 0) {
    $dropdown.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation()
        $el.classList.toggle('is-active')
      })
    })
    document.addEventListener('click', function (event) {
      closeDropdown()
    })
  }
  function closeDropdown () {
    $dropdown.forEach(function ($el) {
      $el.classList.remove('is-active')
    })
  }
  // Close dropdown if ESC pressed
  document.addEventListener('keydown', function (event) {
    var e = event || window.event
    if (e.keyCode === 27) {
      closeDropdown()
    }
  })
  // Functions
  function getAll (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0)
  }
})
</script>

<script>
import 'bulma/css/bulma.css'
import Brace from 'vue-bulma-brace'
export default {
  components: {
    Brace
  }
}
</script>