import dayjs from "dayjs"

export const mockTicketData = {
  detail: {
    departTimeStr: '07:15',
    arriveTimeStr: '11:47',
    arriveDate: dayjs(new Date()).valueOf(),
    durationStr: '4h32min'
  },
  candidates: [{
    type: 'Economy Class',
    priceMsg: '443.5',
    ticketsLeft: 'Avaliable',
    channels: [{
        name: 'Fast Booking',
        desc: 'Get Ticket right now'
    }, {
        name: 'Normal Booking',
        desc: 'Get Ticket within 2 days'
    }]
  }, {
    type: 'Business Class',
    priceMsg: '748.5',
    ticketsLeft: 'Avaliable',
    channels: [{
        name: 'Fast Booking',
        desc: 'Get Ticket right now'
    }, {
        name: 'Normal Booking',
        desc: 'Get Ticket within 2 days'
    }]
  }, {
    type: 'First Class',
    priceMsg: '1403.5',
    ticketsLeft: '5 tickets',
    channels: [{
        name: 'Fast Booking',
        desc: 'Get Ticket right now'
    }, {
        name: 'Normal Booking',
        desc: 'Get Ticket within 2 days'
    }]
  }]
}