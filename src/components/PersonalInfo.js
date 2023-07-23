import { Placeholder } from "react-bootstrap";

export const PersonalInfo = [
    {
        section: 1,
        items: [

            {
                label: 'First name',
                type: 'first',
                value: 'firstName',
            },
            {
                label: 'Last name',
                type: 'last',
                value: 'lastName',
            },
            {
                label: 'Email address',
                type: 'address',
                value: 'email',
            },
            {
                label: 'Phone number',
                type: 'number',
                value: 'phone',
            }
        ]
    },

    {
        section: 2,
        items: [
            {
                
                label: 'Expert',
                type: 'selectexp',
                options: ['John Doe', 'Jane Doe', 'Sofia Hayes'],
                value: 'expert',
            },
            {
                label: 'Service',
                type: 'selectserv',
                options: ['Himalayan Salt Treatment', 'Detox and cellulite treatment', 'Foot care', 'Cleansing Facial', 'Facial Gua Sha', 'Anti-aging facial treatment', 'Keratin Treatment', 'Lashes and brows', 'Laser Hair Removal'],
                value: 'service',
            },
            {
                label: 'Date',
                type: 'pickDate',
                value: 'date',
                errorMessage: ""
            },
            {
                label: 'Time',
                type: 'selecttime',
                options: ['9h30 a.m.', '10h00 a.m.', '10h30 a.m.', '11h00 a.m.', '11h30 a.m.', '12h00 p.m.', '12h30 p.m.', '01h00 p.m.', '01h30 p.m.', '02h00 p.m.', '02h30 p.m.', '03h00 p.m.', '03h30 p.m.', '04h00 p.m.'],
                value: 'time',
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