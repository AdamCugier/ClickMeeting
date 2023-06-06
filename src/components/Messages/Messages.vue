<template>
<div class="cm-messages">
  <table class="cm-messages--table">
    <tr class="cm-messages--table--header">
      <th>Tytuł</th>
      <th>Nadawca</th>
      <th>Email</th>
      <th>Data</th>
    </tr>
    <tr v-for="msg in state.msgsModule.messages" class="cm-messages--table--body" @click="() => openMessage(msg.id)">
      <td>{{msg.title}}</td>
      <td>{{msg.sender}}</td>
      <td>{{msg.email}}</td>
      <td>{{formatDate(msg.date)}}</td>
    </tr>
  </table>
</div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import './Messages.scss'
import moment from 'moment';

const {state, commit} = useStore()
const openMessage = async (id: string) => {
  await commit('SET_ACTIVE_MESSAGE_ID', id)
}

const formatDate = (date: string) => {
  const d = new Date(date)
  return moment(d).format('DD/MM/YY HH:mm')
}
</script>