import React from 'react'
import { Outlet } from 'react-router-dom'

  /* import Input from "../tut/tut2/inputfield/Input";
  import Toggle from "../tut/tut3/toggle/Toggle";
  import User from "../tut/tut1/props/User";
  import BasicForm from "../tut/tut4/basic form/BasicForm";
  import UseStates from "../hooks/UseStates";
  import Profile from "../tut/tut5/conditionRendering/Profile";
  import Effect from "../hooks/Effect";
  import ArrayMap from "../tut/tut6/handleArray/ArrayMap";
  import ListArray from "../tut/tut7/nestedListArray/ListArray";
  import CompMap from "../tut/tut8/reuseComp/CompMap"; 
  import EffectApi from "../hooks/EffectApi";
  import Memo from "../hooks/Memo";
  import Ref from "../hooks/Ref";
  import Par from "../tut/tut9/liftingState/Par";
  import Parent from "../hooks/Forward/Parent";
  import Controlled from "../tut/tut10/controlled component/Controlled";
  import CompA from "../tut/tut11/high order function/CompA";
  import A from "../higherorder/A";
  import B from "../higherorder/B";
  import Main from "../higherorder/WithApi/Main";
  import PreProps from "../hooks/previous props/PreProps";
  */
  import Dynamic from "../tut/tut12/dynamic routing/Dynamic"

const Home = () => {
  return (
    <div>
      {/*  <User name="jackie" />
      < Input />
      <Toggle /> 
      <BasicForm /> 
      <UseStates /> 
      <Profile /> 
      <Effect />
      <ArrayMap />
      <ListArray />
      <CompMap />  
      <EffectApi/> 
      <Memo/>
      <Ref/>
      <Par/>
      <Parent/>
       <Controlled/>
       <CompA/>
       <A name="A"/>
       <B name="B"/>
       <Main/>
       <PreProps/>
       */}
       <Dynamic /> 
       <Outlet/>
    </div>
  )
}

export default Home