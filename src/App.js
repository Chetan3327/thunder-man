import { useState } from 'react';
import './App.css';
import axios from 'axios';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('')
  const [response, setResponse] = useState('')
  const [data, setData] = useState('')
  const isValidJSON = (value) => {
    try {
      JSON.parse(value);
      return true;
    } catch (error) {
      return false;
    }
  }
  const handelSubmit = () => {
    if(url === ''){
      setResponse({"status": "ERROR", "data": "url can't be empty"})
      return
    }
    switch (method) {
      case 'GET':
        axios.get(url, data).then((response) => {
          console.log(response)
          setResponse(response)
        }).catch((error) => {
            console.error('Error during GET request:', error);
            setResponse({
              status: 'ERROR',
              data: error.message + ', Check console for more details',
            });
          });
        break;
      case 'POST':
        axios.post(url, data).then((response) => {
          setResponse(response)
        }).catch((error) => {
          console.error('Error during POSR request:', error);
          setResponse({
            status: 'ERROR',
            data: error.message + ', Check console for more details',
          });
        });
        break;
      case 'PUT':
        axios.put(url, data).then((response) => {
          setResponse(response)
        }).catch((error) => {
          console.error('Error during PUT request:', error);
          setResponse({
            status: 'ERROR',
            data: error.message + ', Check console for more details',
          });
        });
        break;
      case 'DELETE':
        axios.delete(url).then((response) => {
          setResponse(response)
        }).catch((error) => {
          console.error('Error during DELETE request:', error);
          setResponse({
            status: 'ERROR',
            data: error.message + ', Check console for more details',
          });
        });
        break;
    
      default:
        break;
    }
  }
  return (
    <div className="App">
      <div className='controls'>
        <div className="upper">
        <img src='https://th.bing.com/th/id/OIG.qNecVdOIDcVrqaIeKEJG?w=173&h=173&c=6&pcl=1b1a19&r=0&o=5&dpr=1.3&pid=ImgGn' alt="" />
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input type="url" onChange={(e) => setUrl(e.target.value)} />
          <button onClick={handelSubmit} disabled={!isValidJSON(data) && (method === 'POST' || method === 'PUT')}>Send</button>
        </div>

        {(method === 'POST' || method === 'PUT') &&
          <div>
            <br />
            Body:
            <br />
            <textarea cols="30" rows="10" placeholder='Provide data in proper json' onChange={(e) => setData(e.target.value)}>

            </textarea>
          </div>
        }
      </div>
      <hr />
      <div className='dev'>
        method: {method}
        <br />
        url: {url}
        <br />
        data: {data}
      </div>
      <hr />
      {response && (
        <div className='output'>
          <div className="status">Status: {response.status}</div>
          <div className="response">
            <pre>
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
      <BackToTopButton />
    </div>
  );
}

export default App;
