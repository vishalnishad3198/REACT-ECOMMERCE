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

export function CheckUserApi() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/user');
    const data = await response.json();
    resolve({ data })
  }
  );
}