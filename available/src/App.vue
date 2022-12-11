<script>
import {db} from './firebaseDb'
export default {
  data() {
    return {
      status: 'Please set your status',
      custom: ''
    }
  },

  methods: {
    onInput(event) {
      this.custom = event.target.value
    },

    onCustom(){
      if(this.custom!=''){
      alert('Status set to ' + this.custom)
      this.status = this.custom
      db.collection('status').doc('status').set({
        status: this.custom
      })}
      else{
        alert('Status cannot be empty')
    }
    },

    onAvailable() {
      alert('Status set to available')
      this.status = 'Available'
      db.collection('status').doc('status').set({
        status: 'Available'
      })
    },

    onUnavailable() {
      alert('Status set to unavailable')
      this.status = 'Unavailable'
      db.collection('status').doc('status').set({
        status: 'Unavailable'
      })
    },
  }
}
</script>

<template>
  <div class="center">
    <div class="titleDiv center">
      <h1>Welcome!</h1>
      <p>Indicate your availability with one of the buttons below</p>
    </div>
  </div>
  <div class="controls center">
      <button @click="onAvailable">Available</button>
      <button @click="onUnavailable">Unavailable</button>
    </div>

  <div class="center">
    <label class="label">Custom: <input :value="custom" @input="onInput" placeholder="Enter custom status here"></label>
    <div style="padding: 1.5%;"></div>
    <button @click="onCustom">Set Custom Status</button>
  </div>  
  <div class="currentStatus center">
    <h2>Current Status: {{ status }}</h2>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.label{
  font-size: 1.5rem;
  padding-right: 1.5rem;
}

.center {
  margin: auto;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.center button {
  margin: auto;
  width: 50%;
  padding: 10px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
