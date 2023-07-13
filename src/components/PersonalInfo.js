import { Placeholder } from "react-bootstrap";

export const PersonalInfo = [
    {
        section: 1,
        items: [
            {
                label: 'First name',
                type: 'text',
                value: 'first',
            },
            {
                label: 'Last name',
                type: 'text',
                value: 'last',
            },
            {
                label: 'Email address',
                type: 'text',
                value: 'email',
            },
            {
                label: 'Phone number',
                type: 'text',
                value: 'phone',
            }
        ]
    },

    {
        section: 2,
        items: [
            {
                
                label: 'Expert',
                type: 'select',
                options: ['John Doe', 'Jane Doe', 'Sofia Hayes'],
                value: 'expert',
            },
            {
                label: 'Service',
                type: 'select',
                options: ['Himalayan Salt Treatment', 'Detox and cellulite treatment', 'Foot care', 'Cleansing Facial', 'Facial Gua Sha', 'Anti-aging facial treatment', 'Keratin Treatment', 'Lashes and brows', 'Laser Hair Removal'],
                value: 'service',
            },
            {
                label: 'Date and time',
                type: 'text',
                value: 'date',
            }
        ]
    },
    {
        section: 3,
        items:[
            {
                label: 'Thank you for making an appointment with Dulce beauty!',
                type: 'information',
            }
        ]
    }

]