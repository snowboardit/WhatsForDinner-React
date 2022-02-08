import './App.css';

function App() {
  return (
    <main className='container'>

      <h1>What's for dinner?</h1>

      <section>

        <div className='left'>
          <h3><strong>Tacos</strong></h3>
          <h5>Ingredients:</h5>
          <ul>
            <li>Beef</li>
            <li>Taco seasoning</li>
            <li>Hard and soft shells</li>
          </ul>
        </div>

        <div className='right'>
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b967884e-483e-472a-af54-ed5347c3aa6f/tacos.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220208T025649Z&X-Amz-Expires=86400&X-Amz-Signature=115a77091b62a6d871dcbbe7906b24830f64236f0a6039d4235fd6ee2c9d31df&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22tacos.png%22&x-id=GetObject" alt="tacos" />
        </div>

      </section>

      <button>Click here to find out!</button>

    </main>
  );
}

export default App;
