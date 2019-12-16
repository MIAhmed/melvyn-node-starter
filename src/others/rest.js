import { Router } from 'express';

import { ContactUs } from './document';

const router = Router();

router.post('/contact-us', async (req, res) => {
    

  try {
    const { talkabout, timeframe, projecttype, budget, description, requestor } = req.body;
     
    const objContactUs = new ContactUs({ talkabout, timeframe, projecttype, budget, description, requestor});
    await objContactUs.save();
    res.status(200).json({ message: 'Thank you for contacting us.' });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.get('/get-contact-us', async (req, res) => {
    const paraemail = req.query("email");
    const contactus = await ContactUs.findOne({ email: paraemail }).exec();

    res.status(200).json({ contactus });
});



export default router;
