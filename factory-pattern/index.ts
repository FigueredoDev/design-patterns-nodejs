class EmailNotification {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`)
    }
}

class SMSNotitification {
    send(message: string): void {
        console.log(`Sending sms with message: ${message}`)
    }
}

class NotificationFactory {
    static createNotification(type: string) {
        switch (type) {
            case 'email':
                return new EmailNotification()
            case 'sms':
                return new SMSNotitification()
            default:
                throw new Error("Invalid notification type")
        }
    }
}

const emailNotification = NotificationFactory.createNotification('email')
const smsNotitification = NotificationFactory.createNotification("sms")

smsNotitification.send('Hello world')
emailNotification.send('Hello world')