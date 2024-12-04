import React,{useEffect, useState} from  'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import './Richtexteditor.css'
import axios from 'axios'
function RichTextEditor() {
    useEffect(()=>{
        axios.get('http://localhost:3000/data1')
        .then(res=>{setStore(res.data)})
        .catch(err=>{alert('something wrong')})
    },[])
  
       const [store,setStore]=useState([])
      const [editorContent, setEditorContent] = useState("");
      const [selectedField, setSelectedField] = useState(false);
      const [previewContent, setPreviewContent] = useState("");
     
      const handleLabelClick = (field) => {
      
        const data = store[field]
        setEditorContent(data);
       
      };
     
      const handlePreview = () => {
        setPreviewContent(editorContent);
        setSelectedField(true)
      };
  return (
    <>
    <div className="container-fluid container1 ">
        <div className="row ">
            <div className="col-12 text-white fs-3 bg-primary text-center"> Proof of concept</div>
        </div>
        <div className="row main ">
          <div className="col-md-2 bg-primary text-white h-100%">
            
          <h5>Labels</h5>
          <Form>
            <Form.Group>
              <Form.Label
                style={{ cursor: "pointer" }}
                onClick={() =>{return(handleLabelClick("firstName"),setSelectedField(false))}}
              >
                First Name
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label
                style={{ cursor: "pointer" }}
                onClick={() => {return(handleLabelClick("lastName"),setSelectedField(false))}}
              >
                Last Name
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label
                style={{ cursor: "pointer" }}
                onClick={() => {return(handleLabelClick("salary"),setSelectedField(false))}}
              >
                Salary
              </Form.Label>
            </Form.Group>
          </Form>
          </div>
          <div className="col-md-10 ">
         <div className='bg-white ' style={{display:selectedField?'none':'inline'}}>

          <ReactQuill className='border-0 mt-4' style={{ height: '200px' }}
            value={editorContent}
            onChange={setEditorContent}
            theme="snow"
          />   
          <Button className='mt-5'
            style={{ lineHeight: "20px",float:'right' }}
            onClick={handlePreview}
            variant="primary"
          >
            Submit
          </Button>
          </div>
         {selectedField? <div className="row">
            <div className="col">
            <h5>Preview</h5>
          <div
            style={{
           
              padding: "10px",
              borderRadius: "5px",
            }}
            dangerouslySetInnerHTML={{ __html: previewContent }}
          ></div>
            </div>
          </div>:''}
          </div>
         
        </div>
    </div>
    </>
  )
}

export default RichTextEditor

