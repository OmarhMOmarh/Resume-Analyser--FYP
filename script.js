// Mock data (replace with real API later)
const listings = [
    {
      id: 1,
      title: "Calculus Textbook",
      price: 20,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Laptop Stand",
      price: 10,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "Bike",
      price: 50,
      image: "https://via.placeholder.com/300"
    }
  ];
  
  // Display listings on the page
  function renderListings() {
    const container = document.getElementById('listingContainer');
    
    listings.forEach(item => {
      const card = document.createElement('div');
      card.className = 'listing-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p class="price">$${item.price}</p>
        <button class="view-btn" onclick="alert('Viewing ${item.title}')">View Details</button>
      `;
      container.appendChild(card);
    });
  }
  
  // Run when the page loads
  window.onload = renderListings;