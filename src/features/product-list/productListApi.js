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

export function CartListApi() {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/cart`);
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
    resolve({ data })
  }
  );
}