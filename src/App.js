import React from "react";
// import Demo1 from "./TodayTest/Demo1";
import Class2 from "./TodayTest/Class2";
import Test67 from "./TodayTest/Func2";
import Crud from "./Crud operations/Crud";
import LifecycleMethods from "./lifecycle methods/LifecycleMethods";
import MyAction from "./Crud operations/MyAction";
import ClassComponent from "./Components/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import ParentComponent from "./Props/ParentComponent";
import MeassageChange from "./Statesinclass/MeassageChange";
import Counter from "./Statesinclass/Counter";
import Ways from "./Destructring/Ways";
import FunctionClick from "./EventHandling/FunctionClick";
import ClassClick from "./EventHandling/ClassClick";
import EventBind from "./EventBinding/EventBind";
import ParentProps from "./MethodsasProps/ParentProps";
import Usergreeting from "./ConditionalRendering/Usergreeting";
import NameList from "./ListrRendering/NameList";
import NameListObj from "./ListrRendering/NameListObj";
import Stylesheet from "./Styling/Stylesheet";
import Form from "./React-reduxMain/Form"
import FragmentDemo from "./Fragments/FragmentDemo";
import ParentComponent1 from "./PureComponents/ParentComponent";
import ParentMemo from "./Memo/ParentMemo";
import FociusInput from "./Refs/FociusInput";
import PortalDemo from "./portals/PortalDemo";
import ErrorBoundaryParent from "./ErrorBoundary/ErrorBoundaryParent";
import ErrorDemoChild from "./ErrorBoundary/ErrorDemoChild";
import HOC from "./HOC/HOC";
import HocCounter from "./HOC/HocCounter";
import User from "./RenderProps/user";
import RegExample from "./Regexpressions/RegExample";
import Counter1 from "./RenderProps/Counter";
import RoutingTopic from "./Routing/RoutingTopic";
import ComponentA from "./Context/ComponentA";
import { UserProvider } from "./Context/UserContext1";
import HttpGet from "./Http/HttpGet";
import HTTPPost from "./Http/HttpPost";
import Account from "./React-reduxMain/Account";
import RichTextEditor from "./RichTextEditor";
import UseContext1 from "./Hooks/UseContext/UseContext1";
import PatrentComponent from "./Hooks/UseCallBack/PatrentComponent";
import CountdownTimer from "./countdown/CountDown";

// import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
// import Test67 from "./TodayTest/Func2";
export const userContext=React.createContext()
function App() {

  return (
    <div className="App">
     {/* <ClassComponent/>
     <FunctionalComponent/>
     <ParentComponent/>
     <MeassageChange/>
     <Counter/>
     <Ways name='reddy' age='24'/>
     <FunctionClick/>
     <ClassClick/>
     <EventBind/>
     <ParentProps/>
     <Usergreeting/>
     <NameList/>
     <NameListObj/>
     <Stylesheet/>
     <Form/>
     <LifecycleMethods/>
     <FragmentDemo/>
     <ParentComponent1/>
     <ParentMemo/>
      <FociusInput/>
      <PortalDemo/>
      <ErrorBoundaryParent><ErrorDemoChild name='eswar'/></ErrorBoundaryParent>
      {/* <ErrorBoundaryParent><ErrorDemoChild name='joker'/></ErrorBoundaryParent>
      <ErrorBoundaryParent><ErrorDemoChild name='rupesh'/></ErrorBoundaryParent>
      <HocCounter/>

      <User render={(count,increment)=>{<Counter1 count1={count} increment1={increment}/>}}/>
      <RegExample/>
      <UserProvider value='eswarreddy'>
      <ComponentA/>
      </UserProvider>
      <HttpGet/>
      <HTTPPost/>
       */}
     {/* <Account/>
     <Form/> */}
     {/* <RichTextEditor/> */}
    {/* <userContext.Provider value='eswar'>
      <UseContext1/>
      </userContext.Provider> */}
      {/* <PatrentComponent/> */}
      {/* <RoutingTopic/> */}
      <CountdownTimer/>
     </div>
  );
}

export default App;
