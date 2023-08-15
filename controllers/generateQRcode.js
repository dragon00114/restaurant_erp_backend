const qr = require('qrcode');



const generateQR = async(req, res) => {
    try {
        const { data } = req.body;
        const qrCode = await qr.toDataURL(data);
        res.status(200).json({ qrCode });
        } catch (error) {
        console.error('Error generating QR code', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    generateQR
  };