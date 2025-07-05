const dropZone = document.getElementById('dropZone');
const contactsBody = document.getElementById('contactsBody');
const messageTemplate = document.getElementById('messageTemplate');
const avgTimeInput = document.getElementById('avgTime');
const sendButton = document.getElementById('sendButton');
const statusDiv = document.getElementById('status');
let contacts = [];

// Drag and drop handling
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
        readCSV(file);
    } else {
        statusDiv.textContent = 'Please drop a valid CSV file.';
    }
});

// Read and parse CSV
function readCSV(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        contacts = [];
        const rows = text.split('\n').map(row => row.trim()).filter(row => row);
        const headers = rows[0].split(',').map(header => header.trim().toLowerCase());
        if (!headers.includes('name') || !headers.includes('phone')) {
            statusDiv.textContent = 'CSV must contain "name" and "phone" columns.';
            return;
        }
        for (let i = 1; i < rows.length; i++) {
            const cols = rows[i].split(',').map(col => col.trim());
            if (cols.length >= 2) {
                const contact = {
                    name: cols[headers.indexOf('name')],
                    phone: cols[headers.indexOf('phone')].replace(/\D/g, '') // Clean phone number
                };
                contacts.push(contact);
            }
        }
        console.log('Loaded contacts:', contacts); // Debugging
        updateTable();
        sendButton.disabled = contacts.length === 0 || !messageTemplate.value;
        statusDiv.textContent = `Loaded ${contacts.length} contacts.`;
    };
    reader.readAsText(file);
}

// Update contacts table
function updateTable() {
    contactsBody.innerHTML = '';
    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${contact.name}</td><td>${contact.phone}</td>`;
        contactsBody.appendChild(row);
    });
}

// Enable/disable send button based on input
messageTemplate.addEventListener('input', () => {
    sendButton.disabled = contacts.length === 0 || !messageTemplate.value;
});

// Send messages via WhatsApp with delay
sendButton.addEventListener('click', async () => {
    if (contacts.length === 0 || !messageTemplate.value) {
        statusDiv.textContent = 'Please load contacts and enter a message template.';
        return;
    }

    sendButton.disabled = true;
    statusDiv.textContent = 'Starting to send messages...';
    const avgTime = parseFloat(avgTimeInput.value) * 60 * 1000; // Convert minutes to milliseconds

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const message = messageTemplate.value.replace('{name}', contact.name);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodedMessage}`;
        
        console.log(`Opening WhatsApp for ${contact.name} (${contact.phone}): ${whatsappUrl}`); // Debugging
        window.open(whatsappUrl, '_blank', `noopener,noreferrer,${Date.now()}`); // Unique window name
        
        // Wait for the specified delay
        await new Promise(resolve => setTimeout(resolve, avgTime));
        statusDiv.textContent = `Opened WhatsApp for ${contact.name} (${i + 1}/${contacts.length})`;
    }

    statusDiv.textContent = 'All WhatsApp chats opened!';
    sendButton.disabled = false;
});
