# Latvian Association of Psychologists

## Contact Form Email Delivery

The contact form in the block "Напишите — мы рядом." now sends a real POST request to an external form endpoint. The recommended setup for this project is Formspree because it works well with a static Vite site and does not require a separate backend in this repository.

1. Create a form at Formspree and connect the mailbox that should receive inquiries.
2. Copy the endpoint, for example `https://formspree.io/f/xxxxxxxx`.
3. Create a local `.env` file based on `.env.example`.
4. Set `VITE_CONTACT_FORM_ENDPOINT` to your Formspree endpoint.
5. Restart the dev server.

Example:

```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Without this variable the form will stay visible, but submissions will not reach email and the UI will show a configuration error.
asdasdasd