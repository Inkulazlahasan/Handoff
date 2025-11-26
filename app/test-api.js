// Simple test to debug API connection
const testAPI = async () => {
  try {
    console.log('Testing API connection...');

    // Test 1: Basic connection
    //const response = await fetch('http://192.168.1.105:8000/api/products');
<<<<<<< HEAD
    const response = await fetch('https://handoff-backend.onrender.com/api/products');
=======
    const response = await fetch('https://handoff-v1jo.onrender.com/api/products');
>>>>>>> b87634541d4cd96c63876b9b589c09bf2e1db5ec
    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API working! Products:', data.length);
      console.log('First product:', data[0]);
    } else {
      console.log('❌ API error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
    console.error('Full error:', error);
  }
};

// Run the test
testAPI();
