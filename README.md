# WhatsAppBot
Automate Cold Calls and Client Outreach with WhatsApp, Import name and phone from a .csv file automatically
![image](https://github.com/user-attachments/assets/f1706863-e69d-424a-b6bd-487e8097b323)
WhatsApp Message Sender
This is a web-based application built with HTML, CSS, and JavaScript that allows users to upload a CSV file containing names and phone numbers, create a personalized message template, and send messages via WhatsApp with a specified delay between each message. The app opens WhatsApp Web or the WhatsApp app with pre-filled messages, requiring manual user interaction to send each message.
Features

CSV Import: Drag and drop a CSV file with name and phone columns to load contacts.
Message Template: Write a message template with {name} for personalization.
Adjustable Delay: Set an average time (in minutes) between opening WhatsApp links for each contact.
WhatsApp Integration: Opens WhatsApp Web or the WhatsApp app with pre-filled messages for manual sending.
Simple Interface: Displays contacts in a table and provides status updates.

Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
A WhatsApp account with an active session on WhatsApp Web or the WhatsApp app.
A CSV file with columns name and phone (phone numbers in international format, e.g., +1234567890).

Installation

Save the Application:

Download or copy the index.html file provided with this application.
Place it in a folder on your computer.


Run the Application:

Option 1: Double-click index.html to open it in your default web browser.
Option 2: Host it on a local server for better performance:
Install Python (if not already installed).
Open a terminal in the folder containing index.html.
Run python -m http.server 8000.
Open your browser and navigate to http://localhost:8000.


Option 3: Use a code editor like VS Code with a Live Server extension to run the file.



Usage Instructions

Prepare a CSV File:

Create a CSV file (e.g., contacts.csv) with at least two columns: name and phone.
Example format:name,phone
John Doe,+1234567890
Jane Smith,+0987654321


Ensure phone numbers are in international format (e.g., +1234567890) and valid for WhatsApp.
Save the file in a known location.


Load Contacts:

Open the application in your browser.
Drag and drop the CSV file into the "Drag and drop a CSV file here" area.
The contacts will appear in a table, showing names and phone numbers.
If the CSV is invalid (e.g., missing name or phone columns), an error message will display.


Write a Message Template:

In the "Message Template" textarea, enter your message.
Use {name} to insert the contact’s name (e.g., "Hello {name}, thanks for joining!").
The "Send Messages via WhatsApp" button will enable once contacts are loaded and a message is entered.


Set Delay:

In the "Avg time per message (minutes)" field, enter the delay between opening WhatsApp links (e.g., 1 for 1 minute).
This delay ensures a natural pace and helps avoid overwhelming WhatsApp’s systems.


Send Messages:

Click the "Send Messages via WhatsApp" button.
For each contact:
A new browser tab or WhatsApp app will open with the contact’s chat and the pre-filled message.
Manually click the "Send" button in WhatsApp to send the message.
Wait for the specified delay before the next contact’s chat opens.


The status area will update to show progress (e.g., "Sent message to John Doe (1/2)").
Once all messages are processed, the status will show "All messages sent!".



Important: Avoiding WhatsApp Terms of Service (TOS) Violations
To use this application safely and avoid WhatsApp account bans, follow these guidelines:

Obtain Consent:

Only send messages to contacts who have explicitly opted in to receive messages from you.
Sending unsolicited messages (e.g., for marketing or spam) violates WhatsApp’s TOS and may violate privacy laws like GDPR or CCPA.


Avoid Automation:

This application requires manual clicking of the "Send" button in WhatsApp for each message. Do not use autoclickers or automation tools to send messages, as this violates WhatsApp’s TOS and can lead to immediate account bans.
WhatsApp actively monitors for automated behavior, such as rapid or repetitive messaging.


Use Reasonable Delays:

Set a reasonable "Avg time per message" (e.g., 1-2 minutes) to mimic natural messaging behavior.
Sending messages too quickly (e.g., less than a few seconds apart) may trigger WhatsApp’s anti-spam systems.


Limit Message Volume:

Avoid sending large volumes of messages in a short period (e.g., hundreds in an hour).
High-volume messaging, even with delays, may be flagged as spam.


Use for Legitimate Purposes:

Use the app for personal or approved business communications (e.g., event reminders, customer updates with consent).
Do not use for mass marketing, spam, or any activity prohibited by WhatsApp’s TOS.


Test with a Secondary Account:

If unsure about your usage, test the app with a secondary WhatsApp account to avoid risking your primary account.
Monitor WhatsApp’s notifications for warnings about suspicious activity.


Consider WhatsApp Business API:

For legitimate bulk messaging (e.g., business notifications), apply for the official WhatsApp Business API (https://developers.facebook.com/docs/whatsapp).
The API is designed for programmatic messaging and ensures compliance with WhatsApp’s policies.



Troubleshooting

CSV Not Loading:
Ensure the CSV has name and phone columns and is properly formatted.
Check for extra commas or invalid characters in the file.


WhatsApp Not Opening:
Verify phone numbers are in international format (e.g., +1234567890).
Ensure you’re logged into WhatsApp Web or the app on your device.


Button Disabled:
Load a valid CSV and enter a message template to enable the "Send Messages" button.


Slow Performance:
Reduce the number of contacts or increase the delay if your browser or device is lagging.


WhatsApp Prompts Login:
Log in to WhatsApp Web in the first tab; subsequent tabs should reuse the session.



Legal Disclaimer
This application is provided for personal use and requires manual interaction to comply with WhatsApp’s Terms of Service. The developer is not responsible for any account bans, legal issues, or other consequences resulting from misuse, including sending unsolicited messages or using automation tools. Always ensure compliance with WhatsApp’s TOS (https://www.whatsapp.com/legal/terms-of-service) and applicable privacy laws.
License
This project is licensed under the GNU License. Use it at your own risk, ensuring compliance with all relevant terms and laws.
