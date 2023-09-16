class MedicalCertificate:
    def __init__(self, certificateId, doctorName, patientName, medicalDetails):
        self.certificateId = certificateId
        self.doctorName = doctorName
        self.patientName = patientName
        self.medicalDetails = medicalDetails
        self.isValid = True  # Initially, when created, the certificate is valid

    def addCertificate(self):
        # Logic to add the certificate to the database or blockchain
        pass

    def verifyCertificate(self):
        # Logic to verify the authenticity of the certificate
        return self.isValid


class Hospital:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.staffList = []

    def addStaff(self, staff):
        self.staffList.append(staff)

    def removeStaff(self, staffId):
        self.staffList = [s for s in self.staffList if s.staffId != staffId]


class Staff:
    def __init__(self, staffId, name, role):
        self.staffId = staffId
        self.name = name
        self.role = role

    def issueCertificate(self, patientName, medicalDetails):
        # Logic to issue a new certificate
        doctorName = self.name
        certificateId = generate_unique_id()  # A function to generate a unique ID
        new_certificate = MedicalCertificate(certificateId, doctorName, patientName, medicalDetails)
        new_certificate.addCertificate()
        return new_certificate


class Verifier:
    def __init__(self, verifierId, name):
        self.verifierId = verifierId
        self.name = name

    def scanQR(self, qrCode):
        # Logic to scan QR and get certificateId
        certificateId = decode_qr(qrCode)  # Function to decode QR code
        return certificateId

    def validateOnBlockchain(self, certificateId):
        # Logic to validate certificate on blockchain using certificateId
        certificate = get_certificate_from_blockchain(certificateId)  # A function to get certificate from blockchain
        return certificate.verifyCertificate()


# Helper functions (for brevity, these are just placeholder names)
def generate_unique_id():
    pass

def decode_qr(qrCode):
    pass

def get_certificate_from_blockchain(certificateId):
    pass