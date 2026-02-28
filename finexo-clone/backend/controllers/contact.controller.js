/**
 * Contact Controller
 * Validates and handles the contact form submission
 */

const sendContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    const errors = [];
    if (!name || name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters.' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Please provide a valid email address.' });
    }
    if (!message || message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters.' });
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // In production, you would send an email here (e.g., via nodemailer or SendGrid)
    // For now we log and return success
    console.log('📬 New contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : '(No subject)',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendContact };
