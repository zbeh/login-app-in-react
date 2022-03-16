import React,{useState,useEffect} from 'react'
import { Form , Button, Row ,Modal} from 'react-bootstrap';
import { BsEye ,BsEyeSlash } from "react-icons/bs";
export default function Signup() {
  const [validated, setValidated] = useState(false);
  const [select,setSelect] = useState('')
  const [data,setData]= useState('')
  const [states,setStates]=useState('')
  const [show, setShow] = useState(false);
  const [showPass,setShowpass] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(form.checkValidity()===true){
      setShow(true)
      event.preventDefault();
    }
  };
  console.log(select);
  const handleSelect =(event)=>{
    console.log(event.target.value); 
    setSelect(event.target.value)
  }
  const handleStates =(event)=>{
    console.log(event.target.value); 
    setStates(event.target.value)
  }
  const handleModal =()=>{
    setShow(false)
  } 
  const getData=()=>{
    fetch('./json/iranstates.json')
    .then(response=>response.json())
    .then(res=> setData(res))
  }
  console.log(data);
  useEffect(()=>{ getData() },[])

  const handleShow = ()=>{
    setShowpass(!showPass)
  }

  return (
    <div className="holder">
      <p className='text-light mt-3 fw-bold fs-4'>رایگان ثبت نام کنید</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Row className="mb-3 ">
          <Form.Group className='mb-3 col-6 ' controlId="validationCustom01">
           <Form.Control className='pass '  required type="text" placeholder="*نام" />
          </Form.Group>
          <Form.Group  className='mb-3 col-6' controlId="validationCustom02">
            <Form.Control className='pass ' required type="text" placeholder="*نام خانوادگی" />
          </Form.Group>
          <Form.Group className='mb-3' controlId="validationCustom03">
            <Form.Control className='pass' required type="text" placeholder="*پست الکترونیک" />
          </Form.Group>
          <div className='d-flex'>
            <Form.Group className=' password' controlId="validationCustom04">
              <Form.Control className='pass pas' type={showPass?'text':'password'} required  pattern=".{8,}" placeholder="*کلمه عبور" />
            </Form.Group>
            <Button type="button" className=' btn-pass py-0' onClick={handleShow}>{showPass?<BsEye/> :<BsEyeSlash/>}</Button>
          </div>
          <Form.Group className='my-3 col-6' controlId="validationCustom05">
            <select id="edu" className='pass text-light ' defaultValue={select} onChange={handleSelect}>
              <option value="" disabled >تحصیلات</option>
              <option value="diploma">دیپلم</option>
              <option value="bs">کارشناسی</option>
              <option value="ms">ارشد</option>
              <option value="phD">دکتری</option>
            </select>
          </Form.Group>
          {select===''? "": 
            <Form.Group className='mb-3 col-6' controlId="validationCustom06">
              <Form.Control className='pass my-3 ' required type="text" placeholder="*محل تحصیل"/>
            </Form.Group>  
          }
        </Row>
        <Row>
          <Form.Label className='text-light col-12 text-end'>محل تولد</Form.Label>
          <Form.Group className='mb-3 col-6' controlId="validationCustom07">
            <select id="location" className='pass form-select text-light' required defaultValue={states} onChange={handleStates}>
              <option value="" disabled >استان</option>
              {Object.keys(data).map((item,i)=><option key={i}>{item}</option>)}
            </select>
          </Form.Group>
          <Form.Group className='mb-3 col-6 align-text-bottom' controlId="validationCustom08" >
            <select id="location" className='pass form-select text-light' required>
              <option value="" disabled selected>شهر</option> 
              {data[states]?.map((item,i)=><option key={i}>{item}</option>)} 
            </select>
          </Form.Group>
        </Row>
        <Button className='bg-success btn-submit fw-bold fs-5' type="submit">ثبت نام</Button>
      </Form>
      <Modal show={show}>
        <Modal.Body>
          <p className='fw-bold fs-4'>اطلاعات با موفقیت ثبت شد</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"onClick={handleModal}>بستن</Button>
        </Modal.Footer>
      </Modal>
    </div>   
  )
}
