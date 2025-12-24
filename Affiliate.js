let affiliates = JSON.parse(localStorage.getItem('affiliates')) || {};

function generateAffiliateLink(name, phone) {
  const id = Math.random().toString(36).slice(2,8).toUpperCase();
  affiliates[id] = {
    name: name,
    phone: phone,
    link: `https://yoursite.com/shop.html?aff=${id}`,
    sales: 0,
    pendingCommission: 0,
    availableCommission: 0,
    totalEarnings: 0,
    joinDate: new Date().toISOString()
  };
  localStorage.setItem('affiliates', JSON.stringify(affiliates));
  return affiliates[id];
}

// Test
console.log(generateAffiliateLink('Ramu', '9876543210'));
