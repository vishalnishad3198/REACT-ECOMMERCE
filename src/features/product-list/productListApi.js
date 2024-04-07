// A mock function to mimic making an async request for data
export function ProductListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data })
  }
  );
}


export function ProductListFilterApi(queryString) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products/?${queryString.name}=${queryString.value}`);
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function AddToCartApi(item) {
  return new Promise(async (resolve) => {
    delete item.id
    const response = await fetch(`http://localhost:8080/cart`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function CartListApi(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart?user=${userId}`);
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function RemoveCartApi(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart/${id}`,{
      method:'DELETE'
    });
    const data = await response.json();
    resolve({ data})
  }
  );
}

export function IncrementItemApi(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart/${item.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    const data = await response.json();
    resolve({data})
  }
  );
}

export function DecrementItemApi(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart/${item.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    const data = await response.json();
    resolve({data})
  }
  );
}

// http://localhost:8080/products?_sort=price&_order=desc
// http://localhost:8080/products?_sort=price&_order=asc
// http://localhost:8080/products?_sort=rating&_order=desc

export function PriceHeighToLowApi() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?_sort=price&_order=desc');
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function PriceLowToHeighApi() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?_sort=price&_order=asc');
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function BestRatingApi() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?_sort=rating&_order=desc');
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function CreateUserApi(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/user',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    resolve({ data })
  }
  );
}

export function LoginUserApi(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/user?email=${userData.email}&password=${userData.password}`);
    const data = await response.json();
    console.log(data)
   
    resolve({ data })
   
    }
  );
}

export function AddressApi(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/address`,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
   
    resolve({ data })
   
    }
  );
}

export function GetAddressApi(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/address?user=${userId}`);
    const data = await response.json();
   
    resolve({ data })
   
    }
  );
}

export function OrderApi(orderData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/order`,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    const data = await response.json();
   
    resolve({ data })
   
    }
  );
}

export function GetOrderApi(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/order?user=${userId}`);
    const data = await response.json();
   
    resolve({ data })
   
    }
  );
}