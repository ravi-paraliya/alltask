import React from 'react'
import Number from './hooks/Number'
import HideShow from './hooks/HideShow'
import FormHandel from './hooks/FormHandel'
import LoginForm from './hooks/LoginForm'
import SwitchBetween from './hooks/SwitchBetween'
import LikeButton from './hooks/LikeButton'
import TodoList from './hooks/TodoList'
import CharacterCount from './hooks/CharacterCount'
import ShopingCart from './hooks/ShopingCart'
import FetchData from './hooks/FetchData'
import WindowWidth from './hooks/WindowWidth'
import SwitcherLocalStorage from './hooks/SwitcherLocalStorage'
import PollingData from './hooks/PollingData'
import TimerComponent from './hooks/TimerComponent'
import CreateTimer from './hooks/CreateTimer'
import CountDown from './hooks/CountDown'
import OnlineStatus from './hooks/OnlineStatus'
import Task1 from './form-handling/Task1'
import Form2 from './form-handling/Form2'

function App() {
  return (
    <div>
      <Number />
      <FormHandel /> 
      <HideShow />
      <LoginForm />
      <SwitchBetween />
      <LikeButton /> 
      <TodoList />
      <CharacterCount /> 
      <TimerComponent />
      <FetchData />
      <WindowWidth />
      <ShopingCart /> 
      <SwitcherLocalStorage />
      <OnlineStatus />
      <CreateTimer />
      <PollingData />
      <CountDown />

      <Task1 />
      <Form2 />
    </div>
  )
}

export default App