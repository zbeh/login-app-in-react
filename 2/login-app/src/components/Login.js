import React,{useState}from 'react'
import { Form , Button, Row,Modal} from 'react-bootstrap';
import { BsEye ,BsEyeSlash } from "react-icons/bs";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [showPass,setShowpass] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(form.checkValidity()===true){
      setShowModal(true)
      event.preventDefault();
    }
    
  };
  const handleModal =()=>{
    setShowModal(false)
  } 
  const handleShow = ()=>{
    setShowpass(!showPass)
  }
  console.log(showPass);
  return (
    <div className='holder d-flex flex-column justify-content-center'>
      <p className='text-light mt-3 fw-bold fs-4'>خوش آمدید</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className='my-2 ' controlId="validationCustom01">
            <Form.Control type='email' className='email'  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"   placeholder="* پست الکترونیک"/>
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>
          <div className='d-flex'>
            <Form.Group controlId="validationCustom02" className='password'>
              <Form.Control className='pass pas' required  pattern=".{8,}" type={showPass?'text':'password'} placeholder="* کلمه عبور"/>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                  
            </Form.Group>
            <Button type="button" className=' btn-pass py-0' onClick={handleShow}>{showPass?<BsEye/> :<BsEyeSlash/>}</Button>
          </div>
        </Row> 
        <p className='text-success text-end'>فراموش کردید؟</p>   
        <Button type="submit" className='bg-success btn-submit'>ورود</Button>
      </Form>
      <Modal show={showModal}>
        <Modal.Body>
          <p className='fw-bold fs-4'>خوش آمدید.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success"onClick={handleModal}>بستن</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
