"use strict";

let allRecords1 = [
    {
        conferenceId: "S16TLHO7QA",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://my.livechatinc.com/archives/S16TLHO7QA",
        conversationTags: ['1-дубли бонус', '1-Бонусная рассылка', '2-Менеджеры Katsubet', '3-Низкий', '4-Простой', '5-Акции и бонусы', '6-Английский', '7- Antony'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:04:22",
        customerEmail: "phonya@.com",
        customerId: "f23e8e88-67aa-4dc6-a545-6f348a01ab3a",
        operatorNicks: ['Mikola'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "S16TMH5H2J",
        conversationCategory: "Финансовые операции",
        conversationLink: "https://my.livechatinc.com/archives/S16TMH5H2J",
        conversationTags: ['chatbot', 'chatbot-transfer', '1-депозит неуспешен', '1-платежи', '2-Менеджеры Katsubet', '3-Средний', '4-Простой', '5-Финансовые операции', '6-Английский', '7-Henry'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:10:31",
        customerEmail: "sdsd@sdds.com",
        customerId: "ed719be9-dc78-4006-9038-8128ddaf80fe",
        operatorNicks: ['Katsubet Support', 'Dave'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "S16TMHDNQU",
        conversationCategory: "Макс бет (игры/слоты)",
        conversationLink: "https://my.livechatinc.com/archives/S16TMHDNQU",
        conversationTags: ['chatbot', 'chatbot-transfer', '6-Английский', '4-Простой', '3-Низкий', '5-Акции и бонусы', '7 - Claire', '2-Менеджеры WIN7bit AUSTRALIA', '1-бездеп регистрация'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:14:18",
        customerEmail: "",
        customerId: "47257c9d-0ea3-4ee6-ad70-130a96453448",
        operatorNicks: ['Customer Support', 'Emma'],
        projectName: "7Bit"
    },
    {
        conferenceId: "S4QV5P",
        conversationCategory: "Закрытие аккаунта",
        conversationLink: "https://app.helpdesk.com/tickets/S4QV5P",
        conversationTags: ['1-GAMBLING рассылка', '2-Менеджеры 7bit', '4-Закрытие аккаунта', '5-Английский', '6-Mark', '9-Я. Ангелина', '9-Проблемный кейс уточняем/передаем в сс'],
        conversationType: "ticket",
        createdAt: "2023-10-01T00:37:59+03:00",
        customerEmail: "wwwwwwwwww@gmail.com",
        customerId: "wwwwwwww@gmail.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "EQQYYF",
        conversationCategory: "Восстановление доступа",
        conversationLink: "https://app.helpdesk.com/tickets/EQQYYF",
        conversationTags: ['1-Переоткрытие', '2-Менеджеры 7bit', '4-Восстановление доступа', '5-Английский', '6-Pablo', '6-Jamie'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:12:33+03:00",
        customerEmail: "romoooooo@gmail.com",
        customerId: "romoooooo@gmail.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "W2U04U",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://app.helpdesk.com/tickets/W2U04U",
        conversationTags: ['1-Daily cashback', '2-Менеджеры Katsubet', '4-Акции и бонусы', '5-Английский', '7-Henry', '1-UTC', '1-другие условия не выполнены', '7-Ethan', '1-NO REPLY'],
        conversationType: "chat",
        createdAt: "2023-10-01T01:21:56+03:00",
        customerEmail: "vasillll@hotmail.com",
        customerId: "vasillll@hotmail.com",
        operatorNicks: ['Olivia'],
        projectName: "Mirax"
    },
    {
        conferenceId: "G7P8UZ",
        conversationCategory: "Технические проблемы (кроме бонусов)",
        conversationLink: "https://app.helpdesk.com/tickets/G7P8UZ",
        conversationTags: ['1-неизвестный вопрос', '2-Менеджеры 7bit', '5-Английский', '6-Mark', '4-Другие тикеты'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:53:27+03:00",
        customerEmail: "lolol@gmail.com",
        customerId: "lolol@gmail.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "5DINWJ",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://app.helpdesk.com/tickets/5DINWJ",
        conversationTags: ['1-бездеп', '2-Менеджеры 7bit', '4-Акции и бонусы', '5-Английский', '6-Mark', '6-Hope'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:56:41+03:00",
        customerEmail: "prakesh@wws.com",
        customerId: "prakesh@wws.com",
        operatorNicks: ['Emma'],
        projectName: "7Bit"
    },
    {
        conferenceId: "6BQN9D",
        conversationCategory: "Другие тикеты",
        conversationLink: "https://app.helpdesk.com/tickets/6BQN9D",
        conversationTags: ['1-неизвестный вопрос', '2-Менеджеры Katsubet', '4-Другие тикеты', '5-Английский', '7-Antony'],
        conversationType: "ticket",
        createdAt: "2023-10-01T02:02:24+03:00",
        customerEmail: "asdfrt@gmail.com",
        customerId: "asdfrt@gmail.com",
        operatorNicks: ['Jimmy'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "FI05HO",
        conversationCategory: "Финансовые операции",
        conversationLink: "https://app.helpdesk.com/tickets/FI05HO",
        conversationTags: ['2-Менеджеры Mirax', '1-депозит успешен', '4-Финансовые операции', '5-Английский', '7-Antony', '1-недостаточная сумма депозита', '1-Lucky Spin'],
        conversationType: "ticket",
        createdAt: "2023-10-01T02:13:47+03:00",
        customerEmail: "aaasdfffdsa@gmail.com",
        customerId: "aaasdfffdsa@gmail.com",
        operatorNicks: ['Jimmy'],
        projectName: "Mirax"
    },
    {
        conferenceId: "S16TLHO7QA",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://my.livechatinc.com/archives/S16TLHO7QA",
        conversationTags: ['1-дубли бонус', '1-Бонусная рассылка', '2-Менеджеры Katsubet', '3-Низкий', '4-Простой', '5-Акции и бонусы', '6-Английский', '7- Antony'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:04:22",
        customerEmail: "12121212@rrr.com",
        customerId: "f23e8e88-67aa-4dc6-a545-6f348a01ab3a",
        operatorNicks: ['Jimmy'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "S16TMH5H2J",
        conversationCategory: "Финансовые операции",
        conversationLink: "https://my.livechatinc.com/archives/S16TMH5H2J",
        conversationTags: ['chatbot', 'chatbot-transfer', '1-депозит неуспешен', '1-платежи', '2-Менеджеры Katsubet', '3-Средний', '4-Простой', '5-Финансовые операции', '6-Английский', '7-Henry'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:10:31",
        customerEmail: "12123123@uiop.com",
        customerId: "ed719be9-dc78-4006-9038-8128ddaf80fe",
        operatorNicks: ['Katsubet Support', 'Dave'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "S16TMHDNQU",
        conversationCategory: "Макс бет (игры/слоты)",
        conversationLink: "https://my.livechatinc.com/archives/S16TMHDNQU",
        conversationTags: ['chatbot', 'chatbot-transfer', '6-Английский', '4-Простой', '3-Низкий', '5-Акции и бонусы', '7 - Claire', '2-Менеджеры WIN7bit AUSTRALIA', '1-бездеп регистрация'],
        conversationType: "chat",
        createdAt: "2023-10-01 00:14:18",
        customerEmail: "",
        customerId: "47257c9d-0ea3-4ee6-ad70-130a96453448",
        operatorNicks: ['Customer Support', 'Emma'],
        projectName: "7Bit"
    },
    {
        conferenceId: "S4QV5P",
        conversationCategory: "Закрытие аккаунта",
        conversationLink: "https://app.helpdesk.com/tickets/S4QV5P",
        conversationTags: ['1-GAMBLING рассылка', '2-Менеджеры 7bit', '4-Закрытие аккаунта', '5-Английский', '6-Mark', '9-Я. Ангелина', '9-Проблемный кейс уточняем/передаем в сс'],
        conversationType: "ticket",
        createdAt: "2023-10-01T00:37:59+03:00",
        customerEmail: "dodik@dd.com",
        customerId: "dodik@dd.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "EQQYYF",
        conversationCategory: "Восстановление доступа",
        conversationLink: "https://app.helpdesk.com/tickets/EQQYYF",
        conversationTags: ['1-Переоткрытие', '2-Менеджеры 7bit', '4-Восстановление доступа', '5-Английский', '6-Pablo', '6-Jamie'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:12:33+03:00",
        customerEmail: "mmm@eee.com",
        customerId: "mmm@eee.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "W2U04U",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://app.helpdesk.com/tickets/W2U04U",
        conversationTags: ['1-Daily cashback', '2-Менеджеры Katsubet', '4-Акции и бонусы', '5-Английский', '7-Henry', '1-UTC', '1-другие условия не выполнены', '7-Ethan', '1-NO REPLY'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:21:56+03:00",
        customerEmail: "123@hotmail.com",
        customerId: "123@hotmail.com",
        operatorNicks: ['noAgent'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "G7P8UZ",
        conversationCategory: "Другие тикеты",
        conversationLink: "https://app.helpdesk.com/tickets/G7P8UZ",
        conversationTags: ['1-неизвестный вопрос', '2-Менеджеры 7bit', '5-Английский', '6-Mark', '4-Другие тикеты'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:53:27+03:00",
        customerEmail: "mnhj@gmail.com",
        customerId: "mnhj@gmail.com",
        operatorNicks: ['Silvia'],
        projectName: "7Bit"
    },
    {
        conferenceId: "5DINWJ",
        conversationCategory: "Акции и бонусы",
        conversationLink: "https://app.helpdesk.com/tickets/5DINWJ",
        conversationTags: ['1-бездеп', '2-Менеджеры 7bit', '4-Акции и бонусы', '5-Английский', '6-Mark', '6-Hope'],
        conversationType: "ticket",
        createdAt: "2023-10-01T01:56:41+03:00",
        customerEmail: "ghurt.com",
        customerId: "ghurt.com",
        operatorNicks: ['Emma'],
        projectName: "7Bit"
    },
    {
        conferenceId: "6BQN9D",
        conversationCategory: "Другие тикеты",
        conversationLink: "https://app.helpdesk.com/tickets/6BQN9D",
        conversationTags: ['1-неизвестный вопрос', '2-Менеджеры Katsubet', '4-Другие тикеты', '5-Английский', '7-Antony'],
        conversationType: "ticket",
        createdAt: "2023-10-01T02:02:24+03:00",
        customerEmail: "golto@gmail.com",
        customerId: "golto@gmail.com",
        operatorNicks: ['Jimmy'],
        projectName: "KatsuBet"
    },
    {
        conferenceId: "FI05HO",
        conversationCategory: "Финансовые операции",
        conversationLink: "https://app.helpdesk.com/tickets/FI05HO",
        conversationTags: ['2-Менеджеры Mirax', '1-депозит успешен', '4-Финансовые операции', '5-Английский', '7-Antony', '1-недостаточная сумма депозита', '1-Lucky Spin'],
        conversationType: "ticket",
        createdAt: "2023-10-01T02:13:47+03:00",
        customerEmail: "mmm@s.com",
        customerId: "mmm@s.com",
        operatorNicks: ['Jimmy'],
        projectName: "Mirax"
    }
]
let checkList1 = [
    {
        id: "S19VQ01VTT",
        problemDesc: "немає мітки категорії",
        problemLink: "https://my.livechatinc.com/archives/S19VQ01VTT",
        problemType: "EMPTY",
        rmvPosAllList: 3712,
        rmvPosChats: 3712,
        sourse: "chat",
        tags: ['chatbot', 'chatbot-transfer'],
    },
    {
        id: "S19VQ01VTT",
        problemDesc: "немає мітки категорії",
        problemLink: "https://my.livechatinc.com/archives/S19VQ01VTT",
        problemType: "NOREPLYANDCAT",
        rmvPosAllList: 3712,
        rmvPosChats: 3712,
        sourse: "chat",
        tags: ['chatbot', 'chatbot-transfer'],
    },
    {
        id: "S19VQ01VTT",
        problemDesc: "немає мітки категорії",
        problemLink: "https://my.livechatinc.com/archives/S19VQ01VTT",
        problemType: "CATDUPS",
        rmvPosAllList: 3712,
        rmvPosChats: 3712,
        sourse: "chat",
        tags: ['chatbot', 'chatbot-transfer'],
    },
]
let tagsList1 = ['1-  Бонусная рассылка', '1- Бонусная рассылка', '1-Daily cashback', '1-Friday TG', '1-GDPR',
    '1-Gambling problems', '1-Highroller cashback', '1-Lucky Spin', '1-Monday Reload', '1-Monday Lootbox',
    '1-Monday Lootbox PRO', '1-Monday Bonus', '1-NO REPLY', '1-Responsible Gambling', '1-S-tag отсутствует',
    '1-Sing up TG', '1-Sign up TG', '1-SUICIDE THREAT', '1-Sunday TG', '1-S-tag в DSL отсутствует',
    '1-S-tag не подходит', '1-Thursday High Bet Bonus', '1-Thursday TG', '1-T&C', '1-TG рассылка',
    '1-Tuesday Lootbox', '1-Thursday Bonus', '1-Trustpilot bonus not issued', '1-UTC', '1-Wednesday FS',
    '1-Weekly cashback', '1-Weekend Bonus', '1-Weekend TG', '1-Weekend Free Spins', '1-Wednesday Match',
    '1-Wednesday Bonus', '1-achievements', '1-finance', '1-Аккаунт', '1-Блок (личные причины)',
    '1-Бонусная рассылка', '1-Блок из-за недоступности бонусов', '1-Блок из-за дубликата',
    '1-Блок (запрещённая страна)', '1-Блок (не создавал аккаунт)', '1-Блок (USA)', '1-ВИП программа',
    '1-Вывод по холду', '1-Вейджер', '1-ВИП оффер', '1-Купон', '1-Максимальная ставка',
    '1-Несоответствие условий бонуса', '1-Несоответствие данных', '1-Приветственный бонус', '1-Промокод',
    '1-Переоткрытие', '1-Партнерство', '1-Турниры', '1-Частота начисления', '1-бездеп', '1-бездеп регистрация',
    '1-бонус от партнера', '1-блок из-за проигрышей', '1-бонус истек', '1-блок из-за мультиаккаунта',
    '1-верификация', '1-выплата неуспешна', '1-вопросы по играм', '1-вывод успешен', '1-выплата зависла',
    '1-выплата утеряна', '1-выигрыш с FS не зачислен', '1-дубли бонус', '1-другие условия не выполнены',
    '1-депозит утерян', '1-день рождения', '1-депозит успешен', '1-депозит завис', '1-депозит неуспешен',
    '1-запрещенная страна бонус', '1-игрок отменил бонус', '1-игры не работают', '1-игра недоступна',
    '1-компоинты', '1-лимиты', '1-мульты бонус', '1-недостаточная сумма депозита', '1-нерабочий бонус',
    '1-неизвестный вопрос', '1-несоответствие рассылок', '1-отмена выплаты нужна верификация',
    '1-отмена выплаты другие причины', '1-отмена выплаты нарушение правил',
    '1-отмена выплаты вывод недоступен', '1-платежи', '1-пароль', '1-проблема с доступом',
    '1-сложности с активацией бонуса', '1-сайт не работает'];

const getE = (selector) => document.querySelector(selector);
const proper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const roundNum = (num) => (!/.00$/.test(num.toFixed(2).toString())) ? num.toFixed(2) : num.toFixed(3);

getE('#currYear').innerHTML = new Date().getFullYear();

let catgoryRuNames = {
    Category_1: "Акции и бонусы",
    Category_2: "Безопасность",
    Category_3: "Верификация аккаунта",
    Category_4: "Вопросы по сайту",
    Category_5: "Восстановление доступа",
    Category_6: "Другие тикеты",
    Category_7: "Закрытие аккаунта",
    Category_8: "Изменения аккаунта",
    Category_9: "Макс бет (игры/слоты)",
    Category_10: "Непройденный депозит",
    Category_11: "Партнерство",
    Category_12: "Проблемы по сайту",
    Category_13: "Проблемы с играми",
    Category_14: "Рассылка",
    Category_15: "Регистрация",
    Category_16: "Тест",
    Category_17: "Технические проблемы (кроме бонусов)",
    Category_18: "Финансовые операции",
    Category_19: "Без категорії",
}

let btnProcessFiles = getE('#processFiles');
let btnResetFiles = getE('#resetFiles');

let recordsChats = [],
    recordsTickets = [],
    allRecords = [],
    checkList = [],
    dataByRecordsTickets = [],
    dataByRecordsChats = [],
    managersList = [],
    tagsList = [];

let isChatsNeeded = false;
let isTicketsNeeded = false;

async function getInfo() {
    console.log("чатів =", recordsChats.length, ", тікетів =", recordsTickets.length, " всього =", allRecords.length);
    console.log(allRecords);
    console.log("Записи на перевірку:", checkList);
    console.log("Виріка за період з", new Date(startDate).toLocaleString('uk-UA').replace(",", ""), "по", new Date(endDate).toLocaleString('uk-UA').replace(",", ""));

    let generalCountContent;
    if (recordsChats.length > 0 && recordsTickets.length > 0) generalCountContent = `чатах та тікетах`;
    else if (recordsChats.length > 0) generalCountContent = `чатах`;
    else if (recordsTickets.length > 0) generalCountContent = `тікетах`;

    getE('.counter-header').style.display = "block";
    getE('.counter-header').innerHTML =
        `Період вибірки: <span class="counter-number">
        ${new Date(startDate).toLocaleString('uk-UA').replace(",", "").substring(0, new Date(startDate).toLocaleString('uk-UA').length - 10)} - ${new Date(endDate).toLocaleString('uk-UA').replace(",", "").substring(0, new Date(endDate).toLocaleString('uk-UA').length - 10)}</span>
        Знайдено <span class="counter-number">${allRecords.length}</span> релевантних звернень в ${generalCountContent}.`;
}

// CHECK IF CONVERSATION TYPE NEEDED FUNCTION START
let chatCheckBox = getE("#isChatsNeeded"),
    chatsCover = getE(".chats-cover"),
    chatFileInput = getE("#chatsFileInput"),
    ticketCheckBox = getE("#isTicketsNeeded"),
    ticketsCover = getE(".tickets-cover"),
    ticketFileInput = getE("#ticketsFileInput");

getE(".file-input-container").onchange = () => {
    if (chatCheckBox.checked && ticketCheckBox.checked) {
        chatsCover.style.width = 0;
        ticketsCover.style.width = 0;
        chatFileInput.disabled = false;
        ticketFileInput.disabled = false;
        isChatsNeeded = true;
        isTicketsNeeded = true;
        btnProcessFiles.disabled = true;
    }
    else if (!chatCheckBox.checked && ticketCheckBox.checked) {
        chatsCover.style.width = "100%";
        ticketsCover.style.width = 0;
        chatFileInput.disabled = true;
        ticketFileInput.disabled = false;
        isChatsNeeded = false;
        isTicketsNeeded = true;
        btnProcessFiles.disabled = true;
    }
    else if (chatCheckBox.checked && !ticketCheckBox.checked) {
        chatsCover.style.width = 0;
        ticketsCover.style.width = "100%";
        chatFileInput.disabled = false;
        ticketFileInput.disabled = true;
        isChatsNeeded = true;
        isTicketsNeeded = false;
        btnProcessFiles.disabled = true;
    }
    else {
        chatsCover.style.width = "100%";
        ticketsCover.style.width = "100%";
        chatFileInput.disabled = true;
        ticketFileInput.disabled = true;
        isChatsNeeded = false;
        isTicketsNeeded = false;
        getE('.checkChat').style.opacity = 0;
        getE('.checkTicket').style.opacity = 0;
        chatFileInput.value = "";
        ticketFileInput.value = "";
        btnProcessFiles.disabled = true;
    }
}
// CHECK IF CONVERSATION TYPE NEEDED FUNCTION END

// READ FILES FUNCTION START
async function readFiles() {
    getE('.start-instraction-block').style.display = "none";
    if (isChatsNeeded && isTicketsNeeded) {
        await readChats();
        await cleanChatRecords();
        await readTickets();
        await cleanTicketRecords();
    }
    else if (isChatsNeeded) {
        await readChats();
        await cleanChatRecords();
    }
    else if (isTicketsNeeded) {
        await readTickets();
        await cleanTicketRecords();
    }
    disableElem();
    if (recordsTickets.length > 0) buildReportOptionArr.recordsTickets = "";
    if (recordsChats.length > 0) buildReportOptionArr.recordsChats = "";
    if (allRecords.length > 0) buildReportOptionArr.allRecords = "";
    if (checkList.length > 0) {
        showAndBuildDialog(checkList, recordsChats);
        buildReportOptionArr.checkList = "";
    }
    else {
        await buildFilteringSection();
    }
}
// READ FILES FUNCTION END

// CHECK IF LOADED FILE IS PROPER FUNCTION START
let checkChat = false, checkTicket = false;
chatFileInput.onchange = () => {
    let inputElem = chatFileInput.files;
    if (inputElem.length > 0) {
        let newFile = inputElem[0];
        let reader = new FileReader();
        reader.readAsText(newFile);
        reader.onload = function (event) {
            let csvdata = event.target.result;
            let get1Line = csvdata.split('\n');
            let getFCell = get1Line[0].substring(1, get1Line[0].length - 1).split('","');
            if (getFCell[0] === "conferenceId") {
                getE('.checkChat').innerHTML = "V";
                getE('.checkChat').style.opacity = 1;
                getE('.checkChat').style.color = "green";
                checkChat = true;
                if (!isTicketsNeeded) {
                    checkTicket = true;
                }
                if (checkChat && checkTicket) {
                    btnProcessFiles.disabled = false;
                    btnResetFiles.disabled = false;
                }
            }
            else if (getFCell[0] !== "conferenceId") {
                getE('.checkChat').innerHTML = "X";
                getE('.checkChat').style.opacity = 1;
                getE('.checkChat').style.color = "red";
                btnProcessFiles.disabled = true;
                btnResetFiles.disabled = false;
                checkChat = false;
            }
        }
    }
}
ticketFileInput.onchange = () => {
    let inputElem = ticketFileInput.files;
    if (inputElem.length > 0) {
        let newFile = inputElem[0];
        let reader = new FileReader();
        reader.readAsText(newFile);
        reader.onload = function (event) {
            let csvdata = event.target.result;
            let get1Line = csvdata.split('\n');
            let getFCell = get1Line[0].substring(1, get1Line[0].length - 1).split('","');
            if (getFCell[0] === "createdAt") {
                getE('.checkTicket').innerHTML = "V";
                getE('.checkTicket').style.opacity = 1;
                getE('.checkTicket').style.color = "green";
                checkTicket = true;
                if (!isChatsNeeded) {
                    checkChat = true;
                }
                if (checkChat && checkTicket) {
                    btnProcessFiles.disabled = false;
                    btnResetFiles.disabled = false;
                }
            }
            else if (getFCell[0] !== "createdAt") {
                getE('.checkTicket').innerHTML = "X";
                getE('.checkTicket').style.opacity = 1;
                getE('.checkTicket').style.color = "red";
                btnProcessFiles.disabled = true;
                btnResetFiles.disabled = false;
                checkTicket = false;
            }
        }
    }
}
// CHECK IF LOADED FILE IS PROPER FUNCTION END

// DISABLE COMPONETS FUNCTION START
function disableElem() {
    chatFileInput.disabled = true;
    chatCheckBox.disabled = true;
    ticketCheckBox.disabled = true;
    ticketFileInput.disabled = true;
    btnProcessFiles.disabled = true;
    getE('.checkChat').style.opacity = 0;
    getE('.checkTicket').style.opacity = 0;
    chatsCover.style.width = "100%";
    ticketsCover.style.width = "100%";
    chatCheckBox.checked = false;
    ticketCheckBox.checked = false;
}
// DISABLE COMPONETS FUNCTION END

// READ CHATS FILE FUNCTION START
async function readChats() {
    let chatsFile = chatFileInput.files;
    if (chatsFile.length > 0) {
        return new Promise((resolve, reject) => {
            let fileWChats = chatsFile[0];
            let reader = new FileReader(); // FileReader Object
            reader.addEventListener('load', file => {
                resolve(dataByRecordsChats = (file.target.result).split('\n'));
            });
            reader.readAsText(fileWChats);
        });
    } else {
        alert("Будь ласка завантажте файл-звіт з чатами в форматі .csv");
    }
}
// READ CHATS FILE FUNCTION END

// READ TICKETS FILE FUNCTION START
async function readTickets() {
    btnProcessFiles.disabled = false;
    let ticketsFile = ticketFileInput.files;
    if (ticketsFile.length > 0) {
        return new Promise((resolve, reject) => {
            let fileWTickets = ticketsFile[0];
            let reader = new FileReader(); // FileReader Object
            reader.addEventListener('load', file => {
                resolve(dataByRecordsTickets = (file.target.result).split('\n'));
            });
            reader.readAsText(fileWTickets);
        });
    } else {
        alert("Будь ласка завантажте файл-звіт з тікетами в форматі .csv");
    }
}
// READ TICKETS FILE FUNCTION END

// REMOVE INPUT FILE/S FUNCTION START
function rmvFiles() {
    document.location.reload();
    chatFileInput.value = "";
    ticketFileInput.value = "";
    chatCheckBox.disabled = false;
    ticketCheckBox.disabled = false;
    chatFileInput.disabled = false;
    ticketFileInput.disabled = false;
    btnProcessFiles.disabled = true;
    btnResetFiles.disabled = true;
    getE('.checkChat').style.opacity = 0;
    getE('.checkTicket').style.opacity = 0;
    chatCheckBox.checked = false;
    chatsCover.style.width = "100%";
    isChatsNeeded = false;
    ticketCheckBox.checked = false;
    ticketsCover.style.width = "100%";
    isChatsNeeded = false;
    recordsChats = [];
    recordsTickets = [];
    allRecords = [];
    checkList = [];
    dataByRecordsTickets = [];
    dataByRecordsChats = [];
    managersList = [];
    tagsList = [];
    isChatsNeeded = false;
    isTicketsNeeded = false;
    getE('.data-main').classList.add("hide");
    reportContainer.classList.add("hide");
    getE('.start-instraction-block').style.display = "flex";
}
// REMOVE INPUT FILE/S FUNCTION END

// CLEAN CHATS FUNCTION START
let startDate, endDate;
async function cleanChatRecords() {
    // find concat positions START
    let fRowArr = dataByRecordsChats[0].substring(1, dataByRecordsChats[0].length - 1).split('","');
    let operatorNickStart,
        operatorIdStart,
        operatorTimeZoneStart,
        preChatEmailStart,
        tag1Start,
        firstResponseTimeStart;
    for (let i = 0; i < fRowArr.length; i++) {
        if (fRowArr[i] === "operator 1 nick") operatorNickStart = i;
        if (fRowArr[i] === "operator 1 id") operatorIdStart = i;
        if (fRowArr[i] === "operator 1 time zone") operatorTimeZoneStart = i;
        if (fRowArr[i] === "pre chat: E-mail:") preChatEmailStart = i;
        if (fRowArr[i] === "tag 1") tag1Start = i;
        if (fRowArr[i] === "first response time") firstResponseTimeStart = i;
    }
    // find concat positions END

    for (let record = 1; record < dataByRecordsChats.length - 1; record++) {
        let dataByCells = dataByRecordsChats[record].substring(1, dataByRecordsChats[record].length - 1).split('","');
        if (dataByCells[13] === "7Bit Support | login | 1+ dep" ||
            dataByCells[13] === "7bit Support Deparment" ||
            dataByCells[13] === "7bit Support Deparment | login | nodep" ||
            dataByCells[13] === "7bit Support Department | login | nodep" ||
            dataByCells[13] === "Katsubet Support | login | 1+ dep" ||
            dataByCells[13] === "Katsubet Support Department" ||
            dataByCells[13] === "Katsubet Support Department | login | nodep" ||
            dataByCells[13] === "Mirax Support | login | 1+ dep" ||
            dataByCells[13] === "Mirax Support Department" ||
            dataByCells[13] === "Mirax Support Department | login | nodep") {

            // put wide data to arrays START
            let operatorAccounts = [];
            for (let i = operatorNickStart; i < operatorIdStart; i++) {
                if (dataByCells[i] !== "") operatorAccounts.push(dataByCells[i]);
            }
            let operatorIds = [];
            for (let i = operatorIdStart; i < operatorTimeZoneStart; i++) {
                if (dataByCells[i] !== "") operatorIds.push(dataByCells[i]);
            }
            let operatorTimeZones = [];
            for (let i = operatorTimeZoneStart; i < preChatEmailStart; i++) {
                if (dataByCells[i] !== "") operatorTimeZones.push(dataByCells[i]);
            }
            let tags = [];
            for (let i = tag1Start; i < firstResponseTimeStart; i++) {
                if (dataByCells[i] !== "") tags.push(dataByCells[i]);
                if (/1\s*-/.test(dataByCells[i])) {
                    if (tagsList.length === 0) tagsList.push(dataByCells[i])
                    if (!tagsList.includes(dataByCells[i])) tagsList.push(dataByCells[i])
                }
            }
            let operatorNicks = [];
            for (let tag = 0; tag < tags.length; tag++) {
                if (/7\s*-/.test(tags[tag])) {
                    let setTag = tags[tag].substring((tags[tag].match(/[a-zA-Z]/).index), tags[tag].length)
                    if (tags[tag].includes("/")) setTag = setTag.substring(0, setTag.indexOf('/'));
                    operatorNicks.push(setTag);
                    if (managersList.length === 0) managersList.push(setTag);
                    if (!managersList.includes(setTag)) managersList.push(setTag);
                }
            }
            // put wide data to arrays END

            // leave only EMPTY, DUPS and other cases START 
            let checkChat = false;
            if (/@/.test(dataByCells[11])) {
                let tagsLine = tags.join(";");
                if (!/5/.test(tagsLine) &&
                    tags.includes("1-NO REPLY") === false &&
                    tags.includes("1-SPAM") === false) {
                    checkChat = true;
                }
                if (/5/.test(tagsLine)) {
                    checkChat = true;
                }
            }
            // leave only EMPTY, DUPS and other cases END 

            if (checkChat) {
                // mark record with proper PROJECT name START
                let projectName = "";
                if (dataByCells[13] === "7Bit Support | login | 1+ dep" ||
                    dataByCells[13] === "7bit Support Deparment" ||
                    dataByCells[13] === "7bit Support Deparment | login | nodep" ||
                    dataByCells[13] === "7bit Support Department | login | nodep") {
                    projectName = "7Bit"
                }
                else if (dataByCells[13] === "Katsubet Support | login | 1+ dep" ||
                    dataByCells[13] === "Katsubet Support Department" ||
                    dataByCells[13] === "Katsubet Support Department | login | nodep") {
                    projectName = "KatsuBet"
                }
                else if (dataByCells[13] === "Mirax Support | login | 1+ dep" ||
                    dataByCells[13] === "Mirax Support Department" ||
                    dataByCells[13] === "Mirax Support Department | login | nodep") {
                    projectName = "Mirax"
                }
                // mark record with proper PROJECT name END
                // check if CATEGORY doubled START
                let dupsCheck = 0;
                for (let i = 0; i < tags.length; i++) {
                    if (tags[i].includes('5')) dupsCheck++;
                }
                if (dupsCheck > 1) {
                    let checkRecord = {
                        id: dataByCells[0],
                        project: projectName,
                        sourse: "chat",
                        problemLink: "https://my.livechatinc.com/archives/" + dataByCells[0],
                        problemDesc: "дубльована мітка категорії/й",
                        problemType: "CATDUPS",
                        tags: tags,
                        rmvPosChats: recordsChats.length === 0 ? 0 : recordsChats.length,
                        rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                    }
                    checkList.push(checkRecord);
                }
                // check if CATEGORY doubled END

                // check if NO REPLY and/or SPAM with CATEGORY START
                let noRepAndCATcheck = false;
                for (let i = 0; i < tags.length; i++) {
                    if (tags[i].includes("1-NO REPLY") || tags[i].includes("1-SPAM")) {
                        for (let a = 0; a < tags.length; a++) {
                            if (tags[a].includes('5')) {
                                noRepAndCATcheck = true;
                            }
                        }
                    }
                }
                if (noRepAndCATcheck) {
                    let checkRecord = {
                        id: dataByCells[0],
                        project: projectName,
                        sourse: "chat",
                        problemLink: "https://my.livechatinc.com/archives/" + dataByCells[0],
                        problemDesc: "мітка (SPAM та/або NO REPLY) разом з категорією",
                        problemType: "NOREPLYANDCAT",
                        tags: tags,
                        rmvPosChats: recordsChats.length === 0 ? 0 : recordsChats.length,
                        rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                    }
                    checkList.push(checkRecord);
                }
                // check if NO REPLY and/or SPAM with CATEGORY END

                // find record CATEGORY START
                let category;
                for (let i = 0; i < tags.length; i++) {
                    if (tags[i].includes("5")) {
                        switch (tags[i]) {
                            case "5-Акции и бонусы":
                                category = "Акции и бонусы";
                                break;
                            case "5-Безопасность":
                                category = "Безопасность";
                                break;
                            case "5-Верификация аккаунта":
                                category = "Верификация аккаунта";
                                break;
                            case "5-Вопросы по сайту":
                                category = "Вопросы по сайту";
                                break;
                            case "5-Восстановление доступа":
                                category = "Восстановление доступа";
                                break;
                            case "5-Другие тикеты":
                                category = "Другие тикеты";
                                break;
                            case "5-Закрытие аккаунта":
                                category = "Закрытие аккаунта";
                                break;
                            case "5-Изменения аккаунта":
                                category = "Изменения аккаунта";
                                break;
                            case "5-Макс бет (игры/слоты)":
                                category = "Макс бет (игры/слоты)";
                                break;
                            case "5-Непройденный депозит":
                                category = "Непройденный депозит";
                                break;
                            case "5-Партнерство":
                                category = "Партнерство";
                                break;
                            case "5-Проблемы по сайту":
                                category = "Проблемы по сайту";
                                break;
                            case "5-Проблемы с играми":
                                category = "Проблемы с играми";
                                break;
                            case "5-Рассылка":
                                category = "Рассылка";
                                break;
                            case "5-Регистрация":
                                category = "Регистрация";
                                break;
                            case "5-Тест":
                                category = "Тест";
                                break;
                            case "5-Технические проблемы (кроме бонусов)":
                                category = "Технические проблемы (кроме бонусов)";
                                break;
                            case "5-Технические проблемы(кроме бонусов)":
                                category = "Технические проблемы (кроме бонусов)";
                                break;
                            case "5-Финансовые операции":
                                category = "Финансовые операции";
                                break;
                        }
                    }
                }
                // find record CATEGORY END

                // find report start/end date time START
                if (!startDate) startDate = new Date(dataByCells[1]).getTime();
                else if (new Date(dataByCells[1]).getTime() < startDate) startDate = new Date(dataByCells[1]).getTime();
                if (!endDate) endDate = new Date(dataByCells[1]).getTime();
                else if (new Date(dataByCells[1]).getTime() > endDate) endDate = new Date(dataByCells[1]).getTime();
                // find report start/end date time END

                let recordObj = {
                    createdAt: new Date(dataByCells[1]).toLocaleString("uk-UA").replace(',', ""), // conversation start date&time
                    conferenceId: dataByCells[0], // conversation ID
                    projectName: projectName, // project name 
                    conversationType: "chat",
                    conversationLink: "https://my.livechatinc.com/archives/" + dataByCells[0],
                    conversationCategory: (category !== undefined) ? category : "Без категорії", // conversation category
                    conversationTags: tags, // converstaion tags
                    operatorNicks: (operatorNicks.length === 0) ? "noAgent" : operatorNicks, // operatorNicks
                    lastOperator: (operatorNicks.length === 0) ? "noAgent" : operatorNicks[operatorNicks.length - 1], // operatorNicks
                    customerId: dataByCells[7], // customer ID (for chats it has unique ID)
                    customerEmail: dataByCells[10], // customer email
                    specialFields: {
                        createdAtMilis: new Date(dataByCells[1]).getTime(),
                        conversationTimings: {
                            conversationDurationSec: dataByCells[5], // conversation duration in seconds
                            queueDurationSec: dataByCells[6], // conversation queue (before agent receive chat) duration in seconds
                            firstResponseTime: dataByCells[firstResponseTimeStart], // first response time (seconds)
                            averageResponseTime: dataByCells[firstResponseTimeStart + 1], // average response time (seconds)
                            agentsChattingDuration: dataByCells[firstResponseTimeStart + 2], // agents chating duration (seconds)
                        },
                        chatStartDate: dataByCells[2], // chatStartDate ***
                        chatStartUrl: dataByCells[3], // chatStartUrl ***
                        referrer: dataByCells[4], // referrer ***
                        visitorNick: dataByCells[8], // customer Name ***
                        visitorIp: dataByCells[9], // visitorIp ***
                        lastAccountId: dataByCells[11], // lastAccountId ***
                        groupNum: dataByCells[12], // groupNum ***
                        conversationCustomerRating: { rateMark: dataByCells[14], rateComment: dataByCells[15] }, // conversation customer rating ***
                        operatorIds: operatorIds, // operatorIds ***
                        operatorTimeZones: operatorTimeZones, // operatorTimeZones ***
                        preChatEmail: dataByCells[19], // preChatEmail ***
                        autoInviteOption: { autoInviteUrl: dataByCells[20], autoInviteAction: dataByCells[21] }, // conversation auto invite option ***
                        conversationGoal: { goalActionName: dataByCells[22], goalDoneBy: dataByCells[23], goalDoneDate: dataByCells[24], }, // conversation goal ***
                        visitorUserAgent: dataByCells[29], // visitorUserAgent ***
                        groupStatusAtStart: dataByCells[30], // groupStatusAtStart ***
                        visitorCountryCode: dataByCells[31], // visitorCountryCode ***
                        operatorAccounts: operatorAccounts, // manager Account
                    },
                }

                // check if chat without category START
                let tagsRow = tags.join(";");
                if (!/5/.test(tagsRow) &&
                    tags.includes("1-NO REPLY") === false &&
                    tags.includes("1-SPAM") === false) {
                    let checkRecord = {
                        id: dataByCells[0],
                        project: projectName,
                        sourse: "chat",
                        problemLink: "https://my.livechatinc.com/archives/" + dataByCells[0],
                        problemDesc: "немає мітки категорії",
                        problemType: "EMPTY",
                        tags: tags,
                        rmvPosChats: recordsChats.length === 0 ? 0 : recordsChats.length,
                        rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                    }
                    checkList.push(checkRecord);
                }
                // check if chat without category END

                recordsChats.push(recordObj);
                allRecords.push(recordObj);
            }
        }
    }
}
// CLEAN CHATS FUNCTION END

// CLEAN TICKETS FUNCTION START
async function cleanTicketRecords() {
    for (let record = 1; record < dataByRecordsTickets.length - 1; record++) {
        let dataByCells = dataByRecordsTickets[record].substring(1, dataByRecordsTickets[record].length - 1).split('","');

        if (dataByCells[9] === "Менеджеры 7bit" ||
            dataByCells[9] === "Менеджеры WIN7bit" ||
            dataByCells[9] === "Менеджеры Кatsubet" ||
            dataByCells[9] === " Менеджеры Mirax" ||
            dataByCells[9] === "Менеджеры Mirax") {

            let operatorNicks = [];
            let operatorAccountName = [];
            if (dataByCells[10] !== "") operatorAccountName.push(dataByCells[10]);

            if (
                dataByCells[12].length !== 0 && dataByCells[12].includes("4") && dataByCells[12].includes("1-NO REPLY") ||
                dataByCells[12].length !== 0 && dataByCells[12].includes("4") && dataByCells[12].includes("1-SPAM") ||
                dataByCells[12].length !== 0 && !dataByCells[12].includes("1-NO REPLY") && !dataByCells[12].includes("1-SPAM")
            ) {
                let tags = dataByCells[12].split(";");
                for (let tag = 0; tag < tags.length; tag++) {
                    if (/6\s*-/.test(tags[tag]) || /7\s*-/.test(tags[tag])) {
                        let setTag = tags[tag].substring((tags[tag].match(/[a-zA-Z]/).index), tags[tag].length)
                        if (tags[tag].includes("/")) setTag = setTag.substring(0, setTag.indexOf('/'));
                        operatorNicks.push(setTag);
                        if (managersList.length === 0) managersList.push(setTag);
                        if (!managersList.includes(setTag)) managersList.push(setTag);
                    }
                    if (/1\s*-/.test(tags[tag])) {
                        if (tagsList.length === 0) tagsList.push(tags[tag])
                        if (!tagsList.includes(tags[tag])) tagsList.push(tags[tag])
                    }
                }

                // mark record with proper PROJECT name START
                if (dataByCells[9] === "Менеджеры 7bit" ||
                    dataByCells[9] === "Менеджеры WIN7bit" ||
                    dataByCells[9] === "Менеджеры Кatsubet" ||
                    dataByCells[9] === " Менеджеры Mirax" ||
                    dataByCells[9] === "Менеджеры Mirax") {
                    let projectName = "";
                    if (dataByCells[9] === "Менеджеры 7bit" || dataByCells[9] === "Менеджеры WIN7bit") {
                        projectName = "7Bit"
                    }
                    else if (dataByCells[9] === "Менеджеры Кatsubet") {
                        projectName = "KatsuBet"
                    }
                    else if (
                        dataByCells[9] === " Менеджеры Mirax" || dataByCells[9] === "Менеджеры Mirax") {
                        projectName = "Mirax"
                    }
                    // mark record with proper PROJECT name END

                    // check if CATEGORY doubled START
                    let count = 0;
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].includes('4')) {
                            count++;
                        }
                    }
                    if (count > 1) {
                        let checkRecord = {
                            id: dataByCells[3],
                            project: projectName,
                            sourse: "ticket",
                            problemLink: "https://app.helpdesk.com/tickets/" + dataByCells[3],
                            problemDesc: "дубльована мітка категорії/й",
                            problemType: "CATDUPS",
                            tags: tags,
                            rmvPosTickets: recordsTickets.length === 0 ? 0 : recordsTickets.length,
                            rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                        }
                        checkList.push(checkRecord);
                    }
                    else if (count <= 1) {
                        count = 0;
                    }
                    // check if CATEGORY doubled END

                    // check if NO REPLY and/or SPAM with CATEGORY START
                    let noRepAndCATcheck = false;
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].includes("1-NO REPLY") || tags[i].includes("1-SPAM")) {
                            for (let a = 0; a < tags.length; a++) {
                                if (tags[a].includes('4')) {
                                    noRepAndCATcheck = true;
                                }
                            }
                        }
                    }
                    if (noRepAndCATcheck) {
                        let checkRecord = {
                            id: dataByCells[3],
                            project: projectName,
                            sourse: "ticket",
                            problemLink: "https://app.helpdesk.com/tickets/" + dataByCells[3],
                            problemDesc: "мітка (SPAM та/або NO REPLY) разом з категорією",
                            problemType: "NOREPLYANDCAT",
                            tags: tags,
                            rmvPosTickets: recordsTickets.length === 0 ? 0 : recordsTickets.length,
                            rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                        }
                        checkList.push(checkRecord);
                    }
                    // check if NO REPLY and/or SPAM with CATEGORY END

                    // find record CATEGORY START
                    let category;
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].includes('4')) {
                            switch (tags[i]) {
                                case "4-Акции и бонусы":
                                    category = "Акции и бонусы";
                                    break;
                                case "4-Безопасность":
                                    category = "Безопасность";
                                    break;
                                case "4-Верификация аккаунта":
                                    category = "Верификация аккаунта";
                                    break;
                                case "4-Вопросы по сайту":
                                    category = "Вопросы по сайту";
                                    break;
                                case "4-Восстановление доступа":
                                    category = "Восстановление доступа";
                                    break;
                                case "4-Другие тикеты":
                                    category = "Другие тикеты";
                                    break;
                                case "4-Закрытие аккаунта":
                                    category = "Закрытие аккаунта";
                                    break;
                                case "4-Изменения аккаунта":
                                    category = "Изменения аккаунта";
                                    break;
                                case "4-Макс бет (игры/слоты)":
                                    category = "Макс бет (игры/слоты)";
                                    break;
                                case "4-Непройденный депозит":
                                    category = "Непройденный депозит";
                                    break;
                                case "4-Партнерство":
                                    category = "Партнерство";
                                    break;
                                case "4-Проблемы по сайту":
                                    category = "Проблемы по сайту";
                                    break;
                                case "4-Проблемы с играми":
                                    category = "Проблемы с играми";
                                    break;
                                case "4-Рассылка":
                                    category = "Рассылка";
                                    break;
                                case "4-Регистрация":
                                    category = "Регистрация";
                                    break;
                                case "4-Тест":
                                    category = "Тест";
                                    break;
                                case "4-Технические проблемы (кроме бонусов)":
                                    category = "Технические проблемы (кроме бонусов)";
                                    break;
                                case "4-Технические проблемы(кроме бонусов)":
                                    category = "Технические проблемы (кроме бонусов)";
                                    break;
                                case "4-Финансовые операции":
                                    category = "Финансовые операции";
                                    break;
                            }
                        }
                    }
                    // find record CATEGORY END

                    // find report start/end date time START
                    if (!startDate) startDate = new Date(dataByCells[0]).getTime();
                    else if (new Date(dataByCells[0]).getTime() < startDate) startDate = new Date(dataByCells[0]).getTime();
                    if (!endDate) endDate = new Date(dataByCells[0]).getTime();
                    else if (new Date(dataByCells[0]).getTime() > endDate) endDate = new Date(dataByCells[0]).getTime();
                    // find report start/end date time END

                    let record = {
                        createdAt: new Date(dataByCells[0]).toLocaleString("uk-UA").replace(',', ""), // conversation start date&time
                        conferenceId: dataByCells[3], // conversation ID
                        projectName: projectName, // project name 
                        conversationType: "ticket",
                        conversationLink: "https://app.helpdesk.com/tickets/" + dataByCells[3],
                        conversationCategory: (category !== undefined) ? category : "Без категорії", // conversation category
                        conversationTags: tags, // converstaion tags
                        operatorNicks: (operatorNicks.length === 0) ? "noAgent" : operatorNicks, // operatorNicks
                        lastOperator: (operatorNicks.length === 0) ? "noAgent" : operatorNicks[operatorNicks.length - 1], // operatorNicks
                        customerId: dataByCells[5], // customer ID (for chats it has unique ID)
                        customerEmail: dataByCells[5], // customer email
                        specialFields: {
                            operatorAccountName: operatorAccountName, // operator account name
                            requesterName: dataByCells[4], // customer Name ***
                            lastAccountId: dataByCells[11], // agent account Email (agentEmail) ***
                            conversationCustomerRating: { rateMark: dataByCells[14], rateComment: dataByCells[15] }, // conversation customer rating ***
                            updatedAtTicket: dataByCells[1], // ticket last update date&time ***
                            inboundOutboundTicket: dataByCells[2], // ticket source type ***
                            ticketStatus: dataByCells[6], // ticket status ***
                            ticketPriority: dataByCells[7], // ticket priority ***
                            ticketSubject: dataByCells[8], // ticket subject ***
                            publicMessages: dataByCells[13], // number of messages in the ticket
                            ticketInbox: dataByCells[16], // ticket inbox email ***
                            ticketFolder: dataByCells[17], // ticket folder ***
                        },
                    }

                    // check if ticket without category START
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].includes('4')) break;
                        if (!tags[i].includes('4')) {
                            if (i === tags.length - 1) {
                                let checkRecord = {
                                    id: dataByCells[3],
                                    project: projectName,
                                    sourse: "ticket",
                                    problemLink: "https://app.helpdesk.com/tickets/" + dataByCells[3],
                                    problemDesc: "немає мітки категорії",
                                    problemType: "EMPTY",
                                    tags: tags,
                                    rmvPosTickets: recordsTickets.length === 0 ? 0 : recordsTickets.length,
                                    rmvPosAllList: allRecords.length === 0 ? 0 : allRecords.length,
                                }
                                checkList.push(checkRecord);
                            }
                        }
                    }
                    // check if ticket without category END
                    recordsTickets.push(record);
                    allRecords.push(record);
                }
            }
        }
    }
}
// CLEAN TICKETS FUNCTION END

// BUILD FILTERING OPTIONS FUNCTION START
async function buildFilteringSection() {
    getE('.data-main').classList.remove("hide");
    let filterControlContainer = getE(".data-filtering-container");
    let badgeCountsObj = await recordsCounter(allRecords);

    // get&build PROJECTS list START
    let addCountent = "";
    for (let i = 0; i < Object.keys(badgeCountsObj.projectsCount).length; i++) {
        let optionLabel = Object.keys(badgeCountsObj.projectsCount[i]).toString(),
            optionCount = Object.values(badgeCountsObj.projectsCount[i]).toString();
        addCountent += `
        <label name="projectsDropDown" for="isShow${optionLabel}" >
        <input name="projectsDropDown" type="checkbox" name="isShow${optionLabel}" 
        id="isShow${optionLabel}" value="${optionLabel}">
        <div name="projectsDropDown" class="filter-label-text-box">
        <span name="projectsDropDown" class="labelBadge">${(optionLabel.length > 16) ? optionLabel.substring(0, 18) : optionLabel}</span>
        <span id="_${optionLabel}Badge" name="projectsDropDown" class="countBadge ${(optionLabel.length > 16) ? "badgeShadow" : ""}">${optionCount}</span>
        </div>
        </label>`;
    }
    filterControlContainer.innerHTML = `
        <fieldset class="projectsList-fieldset">
        <legend name="projectsDropDown" onclick="showDropDown(event)">Проєкти &#11206;</legend>
        <div name="projectsDropDown" id="projectsDropDown" class="dropDown">
        <label name="projectsDropDown" for="IsShowAllProjects">
        <input type="checkbox" name="projectsDropDown" id="IsShowAllProjects" value="allProjectsList">
        <div name="projectsDropDown" class="filter-label-text-box">
        <span name="projectsDropDown" class="labelBadge">Всі проєкти</span></div>
        </label>
        ${addCountent}
        </div>
        </fieldset>`;
    // get&build PROJECTS list END

    // get&build CONVERSATION TYPES list START
    addCountent = "";
    for (let i = 0; i < Object.keys(badgeCountsObj.convTypesCount).length; i++) {
        let optionLabel = Object.keys(badgeCountsObj.convTypesCount[i]).toString(),
            optionCount = Object.values(badgeCountsObj.convTypesCount[i]).toString();
        addCountent += `
        <label name="convTypesDropDown" for="isShow${optionLabel}" >
        <input name="convTypesDropDown" type="checkbox" name="isShow${optionLabel}" 
        id="isShow${optionLabel}" value="${optionLabel}">
        <div name="convTypesDropDown" class="filter-label-text-box">
        <span name="convTypesDropDown" class="labelBadge">${(optionLabel === "chat") ? "Чати" : "Тікети"}</span>
        <span name="convTypesDropDown" id="_${optionLabel}Badge" class="countBadge">${optionCount}</span>
        </div>
        </label>`;
    }
    filterControlContainer.innerHTML += `
        <fieldset class="conversationTypesList-fieldset">
        <legend name="convTypesDropDown" onclick="showDropDown(event)">Типи звернень &#11206;</legend>
        <div name="convTypesDropDown" id="convTypesDropDown" class="dropDown">
        <label name="convTypesDropDown" for="IsShowAllConversationTypes">
        <input name="convTypesDropDown" type="checkbox" name="IsShowAllConversationTypes" id="IsShowAllConversationTypes" value="allConversationTypes">
        <div name="convTypesDropDown" class="filter-label-text-box"><span class="labelBadge">Всі типи</span></div>
        </label>
        ${addCountent}
        </div>
        </fieldset>`;
    // get&build CONVERSATION TYPES list END

    // get&build CATEGORIES list START
    addCountent = "";
    for (let i = 0; i < Object.keys(badgeCountsObj.categoriesCount).length; i++) {
        let optionLabel = Object.keys(badgeCountsObj.categoriesCount[i]).toString(),
            optionCount = Object.values(badgeCountsObj.categoriesCount[i]).toString();

        let optionValue;
        for (const key in catgoryRuNames) {
            if (optionLabel === catgoryRuNames[key]) {
                optionValue = optionLabel;
                optionLabel = key;
            }
        }
        addCountent += `
        <label name="categoriesDropDown" for="isShow${optionLabel}" >
        <input name="categoriesDropDown" type="checkbox" name="isShow${optionLabel}" 
        id="isShow${optionLabel}" value="${optionValue}">
        <div name="categoriesDropDown" class="filter-label-text-box">
        <span name="categoriesDropDown" class="labelBadge">${(optionValue.length > 19) ? optionValue.substring(0, 18) : optionValue}</span>
        <span name="categoriesDropDown" id="_${optionLabel}Badge" class="countBadge ${(optionValue.length > 16) ? "badgeShadow" : ""}">${optionCount}</span>
        </div>
        </label>`;
    }
    filterControlContainer.innerHTML += `
        <fieldset class="categoriesList-fieldset">
        <legend name="categoriesDropDown" onclick="showDropDown(event)">Категорії &#11206;</legend>
        <div name="categoriesDropDown" id="categoriesDropDown" class="dropDown">
        <label name="categoriesDropDown" for="IsShowAllCategories">
        <input name="categoriesDropDown" type="checkbox" name="IsShowAllCategories" id="IsShowAllCategories" value="allCategories">
        <div name="categoriesDropDown" class="filter-label-text-box"><span class="labelBadge">Всі категорії</span></div>
        </label>
        ${addCountent}
        </div>
        </fieldset>`;
    // get&build CATEGORIES list END

    // get&build AGENTS list START
    addCountent = "";
    for (let i = 0; i < Object.keys(badgeCountsObj.agentsCount).length; i++) {
        let optionLabel = Object.keys(badgeCountsObj.agentsCount[i]).toString(),
            optionCount = Object.values(badgeCountsObj.agentsCount[i]).toString();

        addCountent += `
        <label name="agentsDropDown" for="isShow${optionLabel}" >
        <input name="agentsDropDown" type="checkbox" name="isShow${optionLabel}" 
        id="isShow${optionLabel}" value="${optionLabel}">
        <div name="agentsDropDown" class="filter-label-text-box">
        <span name="agentsDropDown" class="labelBadge">${(optionLabel === "noAgent") ? "Немає відповідального" : optionLabel}</span>
        <span name="agentsDropDown" id="_${optionLabel}Badge" class="countBadge badgeShadow">${optionCount}</span>
        </div>
        </label>`;
    }
    filterControlContainer.innerHTML += `
        <fieldset class="agentsList-fieldset">
        <legend name="agentsDropDown" onclick="showDropDown(event)">Менеджери &#11206;</legend>
        <div name="agentsDropDown" id="agentsDropDown" class="dropDown">
        <label name="agentsDropDown" for="IsShowAllAgents">
        <input name="agentsDropDown" type="checkbox" name="IsShowAllAgents" id="IsShowAllAgents" value="allAgents">
        <div name="agentsDropDown" class="filter-label-text-box"><span class="labelBadge">Всі категорії</span></div>
        </label>
        ${addCountent}
        </div>
        </fieldset>`;
    // get&build AGENTS list END

    filterControlContainer.innerHTML += `
    <fieldset class="reset-btn-fieldset">
    <input type="button" id="resetFilters" onclick="resetFilters()" value="Скинути">
    </fieldset>`;

    // reset sort arrows START
    for (let table = 0; table < getE('.content').children.length; table++) {
        let tRow = getE('.content').children[table].firstElementChild.firstElementChild;
        for (let i = 0; i < tRow.children.length; i++) {
            tRow.children[i].setAttribute('name', true);
            tRow.children[i].firstElementChild.innerHTML = "";
        }
    }
    // reset sort arrows END

    await getInfo();
    await buildFilters();
    await buildReportSection();
    await countCategories(allRecords);
    await countManagersPerf(allRecords);
    await countTags(allRecords);
}
// BUILD FILTERING OPTIONS FUNCTION END

// RESET FILTERS BUTTON FUNCTION START
async function resetFilters() {
    await buildFilteringSection();
    getE("#downloadCustomReport").disabled = true;
}
// RESET FILTERS BUTTON FUNCTION END

// BUILD FILTERS FUNCTION START
let buildedFilter = {};
async function buildFilters() {
    // build PROJECTS filter START
    let projectsListSect = getE('.projectsList-fieldset').firstElementChild.nextElementSibling;
    let allProjectsCheckBox = getE('#IsShowAllProjects');

    allProjectsCheckBox.checked = true;
    let firstSelectedArr = [];
    if (allProjectsCheckBox.checked) {
        for (let i = 1; i < projectsListSect.children.length; i++) {
            firstSelectedArr.push(projectsListSect.children[i].firstElementChild.value);
        }
        buildedFilter.projectsFilter = firstSelectedArr;
    }

    projectsListSect.onchange = () => {
        let selectedProjectsArr = [];
        if (allProjectsCheckBox.checked && firstSelectedArr.length > 0 ||
            !allProjectsCheckBox.checked && firstSelectedArr.length > 0) {
            for (let i = 1; i < projectsListSect.children.length; i++) {
                if (projectsListSect.children[i].firstElementChild.checked) {
                    selectedProjectsArr.push(projectsListSect.children[i].firstElementChild.value);
                    allProjectsCheckBox.checked = false;
                }
            }
            let count = 0;
            for (let i = 1; i < projectsListSect.children.length; i++) {
                if (!projectsListSect.children[i].firstElementChild.checked) count++;
                if (count === projectsListSect.children.length - 1) allProjectsCheckBox.checked = true;
            }
            buildedFilter.projectsFilter = selectedProjectsArr;
        }
        if (allProjectsCheckBox.checked) {
            for (let i = 1; i < projectsListSect.children.length; i++) {
                selectedProjectsArr.push(projectsListSect.children[i].firstElementChild.value)
            }
            buildedFilter.projectsFilter = selectedProjectsArr;
        }
        filterResults(buildedFilter);
        recordsCounter(filteredDataArr);
    }
    // build PROJECTS filter END

    // build CONVERSATION TYPES filter START
    let convTypesSect = getE('.conversationTypesList-fieldset').firstElementChild.nextElementSibling;
    let allConvTypesCheckBox = getE('#IsShowAllConversationTypes');

    allConvTypesCheckBox.checked = true;
    firstSelectedArr = [];
    if (allConvTypesCheckBox.checked) {
        for (let i = 1; i < convTypesSect.children.length; i++) {
            firstSelectedArr.push(convTypesSect.children[i].firstElementChild.value)
        }
        buildedFilter.convTypesFilter = firstSelectedArr;
    }

    convTypesSect.onchange = (e) => {
        let selectedConvTypesArr = [];
        if (allConvTypesCheckBox.checked && firstSelectedArr.length > 0 ||
            !allConvTypesCheckBox.checked && firstSelectedArr.length > 0) {
            allConvTypesCheckBox.checked = false;
            for (let i = 1; i < convTypesSect.children.length; i++) {
                if (convTypesSect.children[i].firstElementChild.checked) {
                    selectedConvTypesArr.push(convTypesSect.children[i].firstElementChild.value)
                }
            }
            let count = 0;
            for (let i = 1; i < convTypesSect.children.length; i++) {
                if (!convTypesSect.children[i].firstElementChild.checked) count++;
                if (count === convTypesSect.children.length - 1) allConvTypesCheckBox.checked = true;
            }
            buildedFilter.convTypesFilter = selectedConvTypesArr;
        }
        if (allConvTypesCheckBox.checked) {
            for (let i = 1; i < convTypesSect.children.length; i++) {
                selectedConvTypesArr.push(convTypesSect.children[i].firstElementChild.value)
            }
            buildedFilter.convTypesFilter = selectedConvTypesArr;
        }
        filterResults(buildedFilter);
        recordsCounter(filteredDataArr);
    }
    // build CONVERSATION TYPES filter END

    // build CATEGORIES filter START
    let categoriesListSect = getE('.categoriesList-fieldset').firstElementChild.nextElementSibling;
    let allCategoriesCheckBox = getE('#IsShowAllCategories');

    allCategoriesCheckBox.checked = true;
    firstSelectedArr = [];
    if (allCategoriesCheckBox.checked) {
        for (let i = 1; i < categoriesListSect.children.length; i++) {
            firstSelectedArr.push(categoriesListSect.children[i].firstElementChild.value)
        }
        buildedFilter.categoriesFilter = firstSelectedArr;
    }

    categoriesListSect.onchange = (e) => {
        let selectedCategoriesArr = [];
        if (allCategoriesCheckBox.checked && firstSelectedArr.length > 0 ||
            !allCategoriesCheckBox.checked && firstSelectedArr.length > 0) {
            allCategoriesCheckBox.checked = false;
            for (let i = 1; i < categoriesListSect.children.length; i++) {
                if (categoriesListSect.children[i].firstElementChild.checked) {
                    selectedCategoriesArr.push(categoriesListSect.children[i].firstElementChild.value);
                }
            }
            let count = 0;
            for (let i = 1; i < categoriesListSect.children.length; i++) {
                if (!categoriesListSect.children[i].firstElementChild.checked) count++;
                if (count === categoriesListSect.children.length - 1) allCategoriesCheckBox.checked = true;
            }
            buildedFilter.categoriesFilter = selectedCategoriesArr;
        }
        if (allCategoriesCheckBox.checked) {
            for (let i = 1; i < categoriesListSect.children.length; i++) {
                selectedCategoriesArr.push(categoriesListSect.children[i].firstElementChild.value)
            }
            buildedFilter.categoriesFilter = selectedCategoriesArr;
        }
        filterResults(buildedFilter);
        recordsCounter(filteredDataArr);
    }
    // build CATEGORIES filter END

    // build AGENTS filter START
    let agentsListSect = getE('.agentsList-fieldset').firstElementChild.nextElementSibling;
    let allAgentsCheckBox = getE('#IsShowAllAgents');

    allAgentsCheckBox.checked = true;
    firstSelectedArr = [];
    if (allAgentsCheckBox.checked) {
        for (let i = 1; i < agentsListSect.children.length; i++) {
            firstSelectedArr.push(agentsListSect.children[i].firstElementChild.value)
        }
        buildedFilter.agentsFilter = firstSelectedArr;
    }
    agentsListSect.onchange = (e) => {
        let selectedAgentsArr = [];
        if (allAgentsCheckBox.checked && firstSelectedArr.length > 0 ||
            !allAgentsCheckBox.checked && firstSelectedArr.length > 0) {
            allAgentsCheckBox.checked = false;
            for (let i = 1; i < agentsListSect.children.length; i++) {
                if (agentsListSect.children[i].firstElementChild.checked) {
                    selectedAgentsArr.push(agentsListSect.children[i].firstElementChild.value)
                }
            }
            let count = 0;
            for (let i = 1; i < agentsListSect.children.length; i++) {
                if (!agentsListSect.children[i].firstElementChild.checked) count++;
                if (count === agentsListSect.children.length - 1) allAgentsCheckBox.checked = true;
            }
            buildedFilter.agentsFilter = selectedAgentsArr;
        }
        if (allAgentsCheckBox.checked) {
            for (let i = 1; i < agentsListSect.children.length; i++) {
                selectedAgentsArr.push(agentsListSect.children[i].firstElementChild.value)
            }
            buildedFilter.agentsFilter = selectedAgentsArr;
        }
        filterResults(buildedFilter);
        recordsCounter(filteredDataArr);
    }
    // build AGENTS filter END
}
// BUILD FILTERS FUNCTION END

// FILTER RESULTS FUNCTION START
let filteredDataArr = [], savedfilteredDataArr = [];
async function filterResults(buildedFilter) {
    // filtering by PROJECT NAME START
    if (buildedFilter.projectsFilter !== undefined && buildedFilter.projectsFilter.length !== 0) {
        let filrteringArr = [];
        if (filteredDataArr.length !== 0) {
            filrteringArr = filteredDataArr;
            filteredDataArr = [];
        }
        else if (filteredDataArr.length === 0) {
            filrteringArr = allRecords;
        }
        for (let i = 0; i < filrteringArr.length; i++) {
            for (let a = 0; a < buildedFilter.projectsFilter.length; a++) {
                if (filrteringArr[i].projectName === buildedFilter.projectsFilter[a]) {
                    filteredDataArr.push(filrteringArr[i]);
                }
            }
        }
    }
    // filtering by PROJECT NAME END

    // filtering by CONVERSATION TYPE START
    if (buildedFilter.convTypesFilter !== undefined && buildedFilter.convTypesFilter.length !== 0) {
        let filrteringArr = [];
        if (filteredDataArr.length !== 0) {
            filrteringArr = filteredDataArr;
            filteredDataArr = [];
        }
        else if (filteredDataArr.length === 0) {
            filrteringArr = allRecords;
        }
        for (let i = 0; i < filrteringArr.length; i++) {
            for (let a = 0; a < buildedFilter.convTypesFilter.length; a++) {
                if (filrteringArr[i].conversationType === buildedFilter.convTypesFilter[a]) {
                    filteredDataArr.push(filrteringArr[i]);
                }
            }
        }
    }

    // filtering by CONVERSATION TYPE END

    // filtering by CATEGORY START
    if (buildedFilter.categoriesFilter !== undefined && buildedFilter.categoriesFilter.length !== 0) {
        let filrteringArr = [];
        if (filteredDataArr.length !== 0) {
            filrteringArr = filteredDataArr;
            filteredDataArr = [];
        }
        else if (filteredDataArr.length === 0) {
            filrteringArr = allRecords;
        }
        for (let i = 0; i < filrteringArr.length; i++) {
            for (let a = 0; a < buildedFilter.categoriesFilter.length; a++) {
                if (filrteringArr[i].conversationCategory === buildedFilter.categoriesFilter[a]) {
                    filteredDataArr.push(filrteringArr[i]);
                }
            }
        }
    }
    // filtering by CATEGORY END

    // filtering by AGENT NAME START
    if (buildedFilter.agentsFilter !== undefined && buildedFilter.agentsFilter.length !== 0) {
        let filrteringArr = [];
        if (filteredDataArr.length !== 0) {
            filrteringArr = filteredDataArr;
            filteredDataArr = [];
        }
        else if (filteredDataArr.length === 0) {
            filrteringArr = allRecords;
        }
        for (let i = 0; i < filrteringArr.length; i++) {
            for (let a = 0; a < buildedFilter.agentsFilter.length; a++) {
                if (filrteringArr[i].lastOperator === buildedFilter.agentsFilter[a]) {
                    filteredDataArr.push(filrteringArr[i]);
                }
            }
        }
    }
    // filtering by AGENT NAME END

    // reset sort arrows START
    for (let table = 0; table < getE('.content').children.length; table++) {
        let tRow = getE('.content').children[table].firstElementChild.firstElementChild;
        for (let i = 0; i < tRow.children.length; i++) {
            tRow.children[i].setAttribute('name', true);
            tRow.children[i].firstElementChild.innerHTML = "";
        }
    }
    // reset sort arrows END

    savedfilteredDataArr = [...filteredDataArr];
    await recordsCounter(filteredDataArr);
    await countCategories(filteredDataArr);
    await countManagersPerf(filteredDataArr);
    await countTags(filteredDataArr);
    filteredDataArr = [];
}
// FILTER RESULTS FUNCTION END

// CREATE FULL COUNTS LIST FUNCTION START
let cleanRecordsCountObj = {}, projectsList;
async function recordsCounter(dataToCount) {
    // count unique project start
    let allRecordsProject = [];
    for (let i = 0; i < dataToCount.length; i++) {
        allRecordsProject.push(dataToCount[i].projectName)
    }
    projectsList = allRecordsProject.filter((item, i, arr) => arr.indexOf(item) === i);
    let newProject = [];
    for (let i = 0; i < projectsList.length; i++) {
        let regexProjectName = new RegExp(projectsList[i], "g");
        let projectCount = allRecordsProject.join(" ").match(regexProjectName).length;
        newProject.push({ [projectsList[i]]: projectCount });
    }
    cleanRecordsCountObj.projectsCount = Object.assign({}, newProject);
    // count unique project end

    // count unique conversation types start
    let newConvTypes = [];
    let allRecordsConversationTypes = [];
    for (let i = 0; i < dataToCount.length; i++) {
        allRecordsConversationTypes.push(dataToCount[i].conversationType)
    }
    let conversationTypesList = allRecordsConversationTypes.filter((item, i, arr) => arr.indexOf(item) === i);
    let addCountent = "";
    for (let i = 0; i < conversationTypesList.length; i++) {
        let regexConversationTypes = new RegExp(conversationTypesList[i], "g");
        let convTypesCount = allRecordsConversationTypes.join(" ").match(regexConversationTypes).length;
        newConvTypes.push({ [conversationTypesList[i]]: convTypesCount });
    }
    cleanRecordsCountObj.convTypesCount = Object.assign({}, newConvTypes);
    // count unique conversation types end

    // count unique categories start
    let newCategories = [];
    let allRecordsCategory = [];
    for (let i = 0; i < dataToCount.length; i++) {
        allRecordsCategory.push(dataToCount[i].conversationCategory);
        if (dataToCount[i].conversationCategory === "Без категорії") {
        }
    }

    let categoriesList = allRecordsCategory.filter((item, i, arr) => arr.indexOf(item) === i);
    addCountent = "";
    for (let i = 0; i < categoriesList.length; i++) {
        let regexCategoryName;
        if (categoriesList[i] !== undefined) {
            if (categoriesList[i] !== "Макс бет (игры/слоты)" &&
                categoriesList[i] !== "Технические проблемы (кроме бонусов)") {
                regexCategoryName = new RegExp(categoriesList[i], "g");
            }
            if (categoriesList[i] === "Макс бет (игры/слоты)") {
                regexCategoryName = /Макс бет \(игры\/слоты\)/g;
            }
            if (categoriesList[i] === "Технические проблемы (кроме бонусов)") {
                regexCategoryName = /Технические проблемы \(кроме бонусов\)/g;
            }
            let categoriesCount = allRecordsCategory.join(" ").match(regexCategoryName).length;
            newCategories.push({ [categoriesList[i]]: categoriesCount });
        }
    }
    cleanRecordsCountObj.categoriesCount = Object.assign({}, newCategories);
    // count unique categories end

    // count unique agents start
    let newAgents = [];
    let allRecordsAgent = [];
    for (let i = 0; i < dataToCount.length; i++) {
        allRecordsAgent.push(dataToCount[i].lastOperator)
    }
    let agentsList = allRecordsAgent.filter((item, i, arr) => arr.indexOf(item) === i);
    addCountent = "";
    for (let i = 0; i < agentsList.length; i++) {
        if (agentsList[i] !== undefined) {
            let regexAgentName = new RegExp(agentsList[i], "g");
            let agentsCount = allRecordsAgent.join(" ").match(regexAgentName).length;
            newAgents.push({ [agentsList[i]]: agentsCount });
        }
    }

    cleanRecordsCountObj.agentsCount = Object.assign({}, newAgents);
    // count unique agents end

    return cleanRecordsCountObj;
}
// CREATE FULL COUNTS LIST FUNCTION END

// SHOW AND BUILD DIALOG WINDOW FUNCTION START
let dialogContainer = getE('.dialogWindow-container'),
    dialogWindow = getE('.dialogWindow'),
    dialogHeader = getE('.dialogWindow-header'),
    dialogContent = getE('.dialogWindow-content');
async function showAndBuildDialog(checkList) {
    dialogContainer.classList.toggle('hide');
    dialogContent.innerHTML = `<p>У вибірці виявлено наступні елементи. Оберіть які з них очистити:</p>`;
    let cleanOptions = "", emptyCases = true, noReplyAndCat = true, catDups = true,
        countObj = { empty: 0, noReplyAndCat: 0, catDups: 0 };
    for (let record = 0; record < checkList.length; record++) {
        if (checkList[record].problemType === "EMPTY" && emptyCases) countObj.empty++;
        if (checkList[record].problemType === "NOREPLYANDCAT" && noReplyAndCat) countObj.noReplyAndCat++;
        if (checkList[record].problemType === "CATDUPS" && catDups) countObj.catDups++;
    }
    for (let i = 0; i < checkList.length; i++) {
        let titleSet = `Знайдено ${countObj.empty} звернень в яких відсутня мітка категорії.`;
        if (checkList[i].problemType === "EMPTY" && emptyCases) {
            cleanOptions += `<label for="emptyCases" title="${titleSet}">
            <input type="checkbox" name="emptyCases" id="emptyCases" checked>
            - без мітки категорії
            <span id="emptyBadge">(${countObj.empty})</span>
            </label>`;
            emptyCases = false;
        }
        titleSet = `Знайдено ${countObj.noReplyAndCat} звернень в яких є мітка категорії разом з NO REPLY та/або SPAM.`;
        if (checkList[i].problemType === "NOREPLYANDCAT" && noReplyAndCat) {
            cleanOptions += `<label for="noReplyAndCat" title="${titleSet}">
            <input type="checkbox" name="noReplyAndCat" id="noReplyAndCat" checked>
            - категорія та NO REPLY разом
            <span id="noReplyAndCatBadge"> (${countObj.noReplyAndCat})</span>
            </label>`;
            noReplyAndCat = false;
        }
        titleSet = `Знайдено ${countObj.noReplyAndCat} звернень в які мають більше ніж одну мітку категорії.`;
        if (checkList[i].problemType === "CATDUPS" && catDups) {
            cleanOptions += `<label for="catDups" title="${titleSet}">
            <input type="checkbox" name="catDups" id="catDups" checked>
            - категорія дубльована
            <span id="catDupsBadge">(${countObj.catDups})</span>
            </label>`;
            catDups = false;
        }
    }
    dialogContent.innerHTML += cleanOptions;
}
// SHOW AND BUILD DIALOG WINDOW FUNCTION END

// CHECK CLEANING OPTION FUNCTION START
let cleanChoice = [], cleaningCheck = getE('#cleaningCheck');
dialogWindow.onchange = () => {
    let dialogContent = getE('.dialogWindow-content'),
        btnClean = getE('#dialogClean'),
        btnIgnore = getE('#dialogIgnore'),
        emptyCheck = getE('#emptyCases'),
        emptyBadge = getE('#emptyBadge'),
        noReplyAndCatCheck = getE('#noReplyAndCat'),
        noReplyAndCatBadge = getE('#noReplyAndCatBadge'),
        catDupsCheck = getE('#catDups'),
        catDupsBadge = getE('#catDupsBadge');

    if (cleaningCheck.checked) {
        if (emptyCheck) {
            if (emptyCheck.checked) {
                if (!cleanChoice.includes("EMPTY")) cleanChoice.push("EMPTY");
                emptyBadge.style.display = "block";
            }
            emptyCheck.disabled = true;
        }
        if (noReplyAndCatCheck) {
            if (noReplyAndCatCheck.checked) {
                if (!cleanChoice.includes("NOREPLYANDCAT")) cleanChoice.push("NOREPLYANDCAT");
                noReplyAndCatBadge.style.display = "block";
            }
            noReplyAndCatCheck.disabled = true;
        }
        if (catDupsCheck) {
            if (catDupsCheck.checked) {
                if (!cleanChoice.includes("CATDUPS")) cleanChoice.push("CATDUPS");
                catDupsBadge.style.display = "block";
            }
            catDupsCheck.disabled = true;
        }
        btnClean.disabled = false;
        btnIgnore.disabled = false;
    }
    else if (!cleaningCheck.checked) {
        if (emptyCheck) {
            if (emptyCheck.checked) emptyBadge.style.display = "block";
            if (!emptyCheck.checked) {
                emptyBadge.style.display = "none";
                cleanChoice.splice(cleanChoice.indexOf("EMPTY"));
            }
            emptyCheck.disabled = false;
        }
        if (noReplyAndCatCheck) {
            if (noReplyAndCatCheck.checked) noReplyAndCatBadge.style.display = "block";
            if (!noReplyAndCatCheck.checked) {
                noReplyAndCatBadge.style.display = "none";
                cleanChoice.splice(cleanChoice.indexOf("NOREPLYANDCAT"));
            }
            noReplyAndCatCheck.disabled = false;
        }
        if (catDupsCheck) {
            if (catDupsCheck.checked) catDupsBadge.style.display = "block";
            if (!catDupsCheck.checked) {
                catDupsBadge.style.display = "none";
                cleanChoice.splice(cleanChoice.indexOf("CATDUPS"));
            }
            catDupsCheck.disabled = false;
        }
        btnClean.disabled = true;
        btnIgnore.disabled = true;
    }
}
// CHECK CLEANING OPTION FUNCTION END

// DIALOG CLEAN BUTTON FUNCTION START
function dialogClean() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < checkList.length; i++) {
            for (let c = 0; c < cleanChoice.length; c++) {
                // clear empty records start
                if (cleanChoice[c] === "EMPTY") {
                    if (checkList[i].problemType === "EMPTY") {
                        for (let a = 0; a < allRecords.length; a++) {
                            if (checkList[i].id === allRecords[a].conferenceId) {
                                allRecords.splice(allRecords.indexOf(allRecords[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsChats.length; a++) {
                            if (checkList[i].id === recordsChats[a].conferenceId) {
                                recordsChats.splice(recordsChats.indexOf(recordsChats[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsTickets.length; a++) {
                            if (checkList[i].id === recordsTickets[a].conferenceId) {
                                recordsTickets.splice(recordsTickets.indexOf(recordsTickets[a]), 1);
                            }
                        }
                    }
                }
                // clear empty records end

                // clear no reply and category records start
                if (cleanChoice[c] === "NOREPLYANDCAT") {
                    if (checkList[i].problemType === "NOREPLYANDCAT") {
                        for (let a = 0; a < allRecords.length; a++) {
                            if (checkList[i].id === allRecords[a].conferenceId) {
                                allRecords.splice(allRecords.indexOf(allRecords[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsChats.length; a++) {
                            if (checkList[i].id === recordsChats[a].conferenceId) {
                                recordsChats.splice(recordsChats.indexOf(recordsChats[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsTickets.length; a++) {
                            if (checkList[i].id === recordsTickets[a].conferenceId) {
                                recordsTickets.splice(recordsTickets.indexOf(recordsTickets[a]), 1);
                            }
                        }
                    }
                }
                // clear no reply and category records end

                // clear category dups records start
                if (cleanChoice[c] === "CATDUPS") {
                    if (checkList[i].problemType === "CATDUPS") {
                        for (let a = 0; a < allRecords.length; a++) {
                            if (checkList[i].id === allRecords[a].conferenceId) {
                                allRecords.splice(allRecords.indexOf(allRecords[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsChats.length; a++) {
                            if (checkList[i].id === recordsChats[a].conferenceId) {
                                recordsChats.splice(recordsChats.indexOf(recordsChats[a]), 1);
                            }
                        }
                        for (let a = 0; a < recordsTickets.length; a++) {
                            if (checkList[i].id === recordsTickets[a].conferenceId) {
                                recordsTickets.splice(recordsTickets.indexOf(recordsTickets[a]), 1);
                            }
                        }
                    }
                }
                // clear category dups records end
            }
        }
        cleaningCheck.checked = false;
        dialogContainer.classList.toggle('hide');
        resolve(buildFilteringSection());
    })
}
// DIALOG CLEAN BUTTON FUNCTION END

// DIALOG IGNORE BUTTON FUNCTION START
function dialogIgnore() {
    new Promise((resolve, reject) => {
        dialogContainer.classList.toggle('hide');
        cleaningCheck.checked = false;
        resolve(buildFilteringSection());
    })
}
// DIALOG IGNORE BUTTON FUNCTION END

// UPDATE ALL COUNTS ON PAGE FUNCTION START
const dataFilteringContainer = getE(".data-filtering-container");
dataFilteringContainer.onchange = async (e) => {
    let badgeCountsObj = await recordsCounter(savedfilteredDataArr);
    let countObjKeys = [];
    for (const key in badgeCountsObj) countObjKeys.push(key);

    let countWasSetArr = [];
    for (let objKey = 0; objKey < countObjKeys.length; objKey++) {
        for (let i = 0; i < Object.keys(badgeCountsObj[countObjKeys[objKey]]).length; i++) {
            let optionLabel = Object.keys(badgeCountsObj[countObjKeys[objKey]][i]).toString(),
                optionCount = Object.values(badgeCountsObj[countObjKeys[objKey]][i]).toString();
            if (/[А-Яа-я]/.test(optionLabel)) {
                for (const key in catgoryRuNames) {
                    if (optionLabel === catgoryRuNames[key]) optionLabel = key;
                }
            }
            let setNewBadgeCount = getE(`#isShow${optionLabel}`).nextElementSibling.children[1];
            setNewBadgeCount.innerHTML = optionCount;
            // setNewBadgeCount.style.opacity = 1;
            // setNewBadgeCount.classList.remove("zeroRecords");
            countWasSetArr.push(setNewBadgeCount.id);
        }
    }
    let allCountBadgeIds = [];
    for (let sectNum = 0; sectNum < dataFilteringContainer.children.length - 1; sectNum++) {
        let currSection = dataFilteringContainer.children[sectNum].firstElementChild.nextElementSibling;
        for (let elem = 1; elem < currSection.children.length; elem++) {
            let checkingElem = currSection.children[elem].firstElementChild.nextElementSibling.children[1];
            allCountBadgeIds.push(checkingElem.id)
        }
    }
    let setZerosArr = allCountBadgeIds.filter(function (n) { return !this.has(n) }, new Set(countWasSetArr));
    for (let zeroElem = 0; zeroElem < setZerosArr.length; zeroElem++) {
        getE(`#${setZerosArr[zeroElem]}`).innerHTML = 0;
        // getE(`#${setZerosArr[zeroElem]}`).style.opacity = 0;
        // getE(`#${setZerosArr[zeroElem]}`).classList.add("zeroRecords");
    }

    if (getE('#IsShowAllProjects').checked &&
        getE('#IsShowAllConversationTypes').checked &&
        getE('#IsShowAllCategories').checked &&
        getE('#IsShowAllAgents').checked) {
        getE("#downloadCustomReport").disabled = true;
    }
    else {
        getE("#downloadCustomReport").disabled = false;
    }
}
// UPDATE ALL COUNTS ON PAGE FUNCTION END

// BUILD REPORT SECTION FUNCTION START
let buildReportOptionArr = {};
let reportContainer = getE(".report-container");
async function buildReportSection() {
    reportContainer.style.opacity = '1';
    reportContainer.style.height = '49%';

    // reportContainer.style.padding = '15px 20px';
    // reportContainer.style.display = 'block';
    let addContent = "";
    reportContainer.innerHTML = `
            <div><h2>Сформувати очищені звіти:</h2><p class="info-icon">i</p><div class="info-message">
            <p>На основі оброблених данних з ваших звітім можна сформувати типізовані звіти:<br>
            - по чатах;<br>
            - тікетах;<br>
            - загальний (чати та тікети разом);<br>
            - звіт з неправильно проставленими мітками.<br>
            Для того щоб завантажити звіт потрібно спочатку створити відповідний кнопкою "Створити". Коли звіт буде готовий кнопка "Завантажити" стане активною.<br>
            В результаті завантаження ви отримаєте потрібний файл/и у форматі .csv.</p></div></div>`;
    for (let i = 0; i < Object.keys(buildReportOptionArr).length; i++) {
        if (Object.keys(buildReportOptionArr)[i] === "recordsChats") {
            addContent = `<fieldset>
            <legend>- по чатах</legend>
            <input type="button" id="createChatReport" 
            onclick="createReport(recordsChats,'chat')" value="Створити">
            <input type="button" onclick="downloadFile(reportData.chat.fileLink, reportData.chat.reportName)"
            id="downloadChatReport" value="Завантажити" disabled>
            </fieldset>`
        }
        reportContainer.innerHTML += addContent;
        addContent = "";
        if (Object.keys(buildReportOptionArr)[i] === "recordsTickets") {
            addContent = `<fieldset>
            <legend>- по тікетах</legend>
            <input type="button" id="createTicketReport" 
            onclick="createReport(recordsTickets,'ticket')" value="Створити">
            <input type="button" onclick="downloadFile(reportData.ticket.fileLink, reportData.ticket.reportName)"
            id="downloadTicketReport" value="Завантажити" disabled>
            </fieldset>`
        }
        reportContainer.innerHTML += addContent;
        addContent = "";
        if (Object.keys(buildReportOptionArr)[i] === "allRecords") {
            addContent = `<fieldset>
            <legend>- спільний звіт</legend>
            <input type="button" id="createGeneralReport" 
            onclick="createReport(allRecords,'general')" value="Створити">
            <input type="button" onclick="downloadFile(reportData.general.fileLink, reportData.general.reportName)"
            id="downloadGeneralReport" value="Завантажити" disabled>
            </fieldset>`
        }
        reportContainer.innerHTML += addContent;
        addContent = "";
        if (Object.keys(buildReportOptionArr)[i] === "checkList") {
            addContent = `<fieldset>
            <legend>- звернення на перевірку</legend>
            <input type="button" id="createCheckReport" 
            onclick="createReport(checkList,'check')" value="Створити">
            <input type="button" onclick="downloadFile(reportData.check.fileLink, reportData.check.reportName)"
            id="downloadCheckReport" value="Завантажити" disabled>
            </fieldset>`
        }
        reportContainer.innerHTML += addContent;
    }
    if (recordsChats.length !== 0) {
        addContent = `<fieldset>
        <legend>- по чатах на об'єднання</legend>
        <input type="button" id="createMergingChatReport" 
        onclick="createReport(mergingArr,'merging')" value="Створити">
        <input type="button" onclick="downloadFile(reportData.merging.fileLink, reportData.merging.reportName)"
        id="downloadChatMerging" value="Завантажити" disabled>
        </fieldset>`
    }
    reportContainer.innerHTML += addContent;
    reportContainer.classList.remove('hide');
}
// BUILD REPORT SECTION FUNCTION END

// GENERATE REPORT FUNCTION START
let reportData = { chat: {}, ticket: {}, general: {}, check: {}, merging: {} };
async function createReport(recordsForReport, reportType) {
    let recordsToWork = [...recordsForReport];
    if (reportType === "merging") {
        getE('#createMergingChatReport').disabled = true;
        dialogContainer.innerHTML = `
        <div class="load-box">
        <div class="load-image"><img src="./images/icons8-analyze.gif" alt="analyze gif icon"></div>
        <p class="load-tip">Перепочиньте поки ми шукаємо чати для потенційного об'єднання для вас!)</p>
        </div>`;
        dialogContainer.classList.remove('hide');
        new Promise((resolve) => {
            // recordsToWork = findChatsForMerge(recordsChats);
            resolve(findChatsForMerge(recordsChats));
        })
    }

    return new Promise((resolve) => {


        let csv = "";
        let fRow = false;
        for (let row = 0; row < recordsToWork.length; row++) {
            if (reportType === "check") {
                delete recordsToWork[row].rmvPosChats;
                delete recordsToWork[row].rmvPosTickets;
                delete recordsToWork[row].rmvPosAllList;
            }
            let keysAmount = Object.keys(recordsToWork[row]).length;
            let keysCounter = 0;
            if (row === 0) {
                for (let key in recordsToWork[row]) {
                    if (keysCounter + 1 < keysAmount) {
                        let dataToSet = "\"" + key + "\"";
                        csv += dataToSet + (keysCounter + 2 < keysAmount ? ',' : '\r\n');
                        keysCounter++;
                        fRow = true;
                    }
                }
            }
            keysCounter = 0;
            if (row === 0 && fRow) {
                for (let key in recordsToWork[row]) {
                    if (keysCounter + 1 < keysAmount) {
                        let dataToSet = "\"" + (Array.isArray(recordsToWork[row][key]) ? recordsToWork[row][key].join(";") : recordsToWork[row][key]) + "\"";
                        csv += dataToSet + (keysCounter + 2 < keysAmount ? ',' : '\r\n');
                        keysCounter++;
                    }
                }
            }
            else {
                for (let key in recordsToWork[row]) {
                    if (keysCounter + 1 < keysAmount) {
                        let dataToSet = "\"" + (Array.isArray(recordsToWork[row][key]) ? recordsToWork[row][key].join(";") : recordsToWork[row][key]) + "\"";
                        csv += dataToSet + (keysCounter + 2 < keysAmount ? ',' : '\r\n');
                        keysCounter++;
                    }
                }
            }
            keysCounter = 0;
        }
        let setToButton;
        let reportDateTime = new Date().toLocaleString("uk-UA");
        if (reportType === "chat") {
            reportData.chat.reportName = "CHAT_report_" + reportDateTime.replace(",", "");
            reportData.chat.fileLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv);
            setToButton = getE('#downloadChatReport');
        }
        if (reportType === "ticket") {
            reportData.ticket.reportName = "TICKET_report_" + reportDateTime.replace(",", "");
            reportData.ticket.fileLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv);
            setToButton = getE('#downloadTicketReport');
        }
        if (reportType === "general") {
            reportData.general.reportName = "GENERAL_report_" + reportDateTime.replace(",", "");
            reportData.general.fileLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv);
            setToButton = getE('#downloadGeneralReport');
        }
        if (reportType === "check") {
            reportData.check.reportName = "CHECK_report_" + reportDateTime.replace(",", "");
            reportData.check.fileLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv);
            setToButton = getE('#downloadCheckReport');
        }
        if (reportType === "merging") {
            reportData.merging.reportName = "MERGE_CHATS_report_" + reportDateTime.replace(",", "");
            reportData.merging.fileLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv);
            setToButton = getE('#downloadChatMerging');
        }
        if (reportType === "filteredData") {
            reportName = "FILTERED_report_" + reportDateTime.replace(",", "");
            setToButton = false;
        }

        if (!setToButton) {
            let link = document.createElement('a');
            link.id = 'download-csv';
            link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
            link.setAttribute('download', `${reportName}.csv`);
            document.body.appendChild(link)
            document.querySelector("#download-csv").click()
        }
        else resolve(setToButton.disabled = false);
    })

}
// GENERATE REPORT FUNCTION END

// DOWNLOAD FILE FUNCTION START
function downloadFile(fileLink, reportName) {
    let newW = window.open();
    let link = document.createElement('a');
    link.id = 'download-csv';
    link.setAttribute('href', fileLink);
    link.setAttribute('download', `${reportName}.csv`);
    document.body.appendChild(link);
    document.querySelector("#download-csv").click();
    document.querySelector("#download-csv").remove();
    newW.close();
}
// DOWNLOAD FILE FUNCTION END

// SHOW DROP DOWN LIST FUNTION START
let currentDropDownName;
function showDropDown(e) {
    currentDropDownName = 'emptyName';
    if (!e.target.classList.contains('activeDropDown')) {
        for (let i = 0; i < dataFilteringContainer.children.length - 1; i++) {
            dataFilteringContainer.children[i].firstElementChild.classList.remove('activeDropDown');
            dataFilteringContainer.children[i].firstElementChild.nextElementSibling.classList.remove('showDropDown');
        }
        e.target.nextElementSibling.classList.toggle('showDropDown');
        e.target.classList.toggle('activeDropDown');
        currentDropDownName = e.target.getAttribute('name');
    }
}
// SHOW DROP DOWN LIST FUNTION END

// HIDE DROP DOWN LIST FUNTION START
window.onclick = (e) => {
    for (let i = 0; i < dataFilteringContainer.children.length - 1; i++) {
        let legendElem = dataFilteringContainer.children[i].firstElementChild;
        if (legendElem.nextElementSibling.classList.contains('showDropDown') &&
            e.target.getAttribute('name') !== currentDropDownName) {
            legendElem.nextElementSibling.classList.remove('showDropDown');
            legendElem.classList.remove('activeDropDown');
        }
    }
}
// HIDE DROP DOWN LIST FUNTION END

// SHOW DATA TABLE CONTAINER FUCNTION START
function showDataTable() {
    getE('.display-data-container').classList.remove('hide');
}
// SHOW DATA TABLE CONTAINER FUCNTION END

// DATA TABLE SHOW/HIDE EFFECT FUNCTION START
let menu = document.querySelector('.menu'),
    content = document.querySelector('.content');
menu.onclick = (e) => {
    for (let elem = 0; elem < menu.children.length; elem++) {
        if (menu.children[elem].id === e.target.id) {
            menu.children[elem].classList.add('active');
            let idNum = e.target.id.substring(e.target.id.length - 1);
            for (let conElem = 0; conElem < content.children.length; conElem++) {
                if (content.children[conElem].id === `data-table-${idNum}`) content.children[conElem].classList.add('show');
                else content.children[conElem].classList.remove('show');
            }
        }
        else menu.children[elem].classList.remove('active');
    }
}
// DATA TABLE SHOW/HIDE EFFECT FUNCTION END

// COUNT CATEGORIES FUNCTION START
let countedCategoriesList = [], savedCountedCategoriesList = [];
async function countCategories(recordsToCount) {
    let allCategories = "";
    for (let record = 0; record < recordsToCount.length; record++) {
        allCategories += recordsToCount[record].conversationCategory + ",";
    }
    for (const categoryKey in catgoryRuNames) {
        let categoryName = catgoryRuNames[categoryKey], categoryRegex;
        if (categoryName !== "Макс бет (игры/слоты)" &&
            categoryName !== "Технические проблемы (кроме бонусов)") {
            categoryRegex = new RegExp(categoryName, "gm");
        }
        if (categoryName === "Макс бет (игры/слоты)") categoryRegex = /Макс бет \(игры\/слоты\)/gm;
        if (categoryName === "Технические проблемы (кроме бонусов)") categoryRegex = /Технические проблемы \(кроме бонусов\)/gm;
        if (categoryRegex.test(allCategories)) {
            let categoryCount = allCategories.match(categoryRegex).length;
            countedCategoriesList.push({ [categoryName]: categoryCount });
        }
    }
    await buildTable(countedCategoriesList, "categories");
    savedCountedCategoriesList = [...countedCategoriesList];
    countedCategoriesList = [];
}
// COUNT CATEGORIES FUNCTION END

// COUNT MANAGERS PERFORMANCE FUNCTION START
let countedManagersPerfList = [], savedCountedManagersPerfList = [];
async function countManagersPerf(recordsToCount) {
    let allManagersChat = "",
        allManagersGen = "";
    for (let record = 0; record < recordsToCount.length; record++) {
        if (recordsToCount[record].conversationType === 'chat') {
            allManagersChat += recordsToCount[record].lastOperator + ",";
        }
        allManagersGen += recordsToCount[record].lastOperator + ",";
    }
    // manager all conversations count START
    for (let manager = 0; manager < managersList.length; manager++) {
        let managerRegex = new RegExp(managersList[manager], "gm");
        if (managerRegex.test(allManagersGen)) {
            let managerCount = allManagersGen.match(managerRegex).length;
            countedManagersPerfList.push({ [managersList[manager]]: { convCount: managerCount, allConvDur: 0, allFirstResp: 0, chatsCount: 0, ticketsCount: 0 } });
        }
    }
    // manager all conversations count END

    // manager chats and tickets separately count START
    for (let record = 0; record < recordsToCount.length; record++) {
        if (recordsToCount[record].conversationType === 'chat') {
            for (let manager = 0; manager < countedManagersPerfList.length; manager++) {
                let currManagerObj = Object.keys(countedManagersPerfList[manager]).toString();
                if (recordsToCount[record].lastOperator === currManagerObj) {
                    countedManagersPerfList[manager][currManagerObj].chatsCount++;
                }
            }
        }
        else if (recordsToCount[record].conversationType === 'ticket') {
            for (let manager = 0; manager < countedManagersPerfList.length; manager++) {
                let currManagerObj = Object.keys(countedManagersPerfList[manager]).toString();
                if (recordsToCount[record].lastOperator === currManagerObj) {
                    countedManagersPerfList[manager][currManagerObj].ticketsCount++;
                }
            }
        }
    }
    // manager chats and tickets separately count END

    // all conversations duration per manager START
    for (let record = 0; record < recordsToCount.length; record++) {
        if (recordsToCount[record].conversationType === 'chat' &&
            recordsToCount[record].specialFields !== undefined) {
            for (let manager = 0; manager < countedManagersPerfList.length; manager++) {
                let currManagerObj = Object.keys(countedManagersPerfList[manager]).toString();
                if (recordsToCount[record].lastOperator === currManagerObj) {
                    countedManagersPerfList[manager][currManagerObj].allConvDur += ((recordsToCount[record].specialFields.conversationTimings.agentsChattingDuration) / 60);
                }
            }
        }
    }
    // all conversations duration per manager END

    // all conversations first reponse time per manager START
    for (let record = 0; record < recordsToCount.length; record++) {
        if (recordsToCount[record].conversationType === 'chat') {
            for (let manager = 0; manager < countedManagersPerfList.length; manager++) {
                let currManagerObj = Object.keys(countedManagersPerfList[manager]).toString();
                if (recordsToCount[record].lastOperator === currManagerObj) {
                    countedManagersPerfList[manager][currManagerObj].allFirstResp += ((recordsToCount[record].specialFields.conversationTimings.firstResponseTime) / 60);
                }
            }
        }
    }
    // all conversations first reponse time per manager END

    // count average conversations and first response time per manager START
    for (let keyIndex = 0; keyIndex < countedManagersPerfList.length; keyIndex++) {
        for (const key in countedManagersPerfList[keyIndex]) {
            countedManagersPerfList[keyIndex][key].avgConvTime = countedManagersPerfList[keyIndex][key].allConvDur / countedManagersPerfList[keyIndex][key].chatsCount;
            countedManagersPerfList[keyIndex][key].avgFirstResp = countedManagersPerfList[keyIndex][key].allFirstResp / countedManagersPerfList[keyIndex][key].chatsCount;
        }
    }
    // count average conversations and first response time per manager END

    await buildTable(countedManagersPerfList, "managers");
    savedCountedManagersPerfList = [...countedManagersPerfList];
    countedManagersPerfList = [];
}
// COUNT MANAGERS PERFORMANCE FUNCTION END

// COUNT TAGS FUNCTION START
let countedTagsList = [], savedCountedTagsList = [];
async function countTags(recordsToCount) {
    let allTags = "";
    for (let record = 0; record < recordsToCount.length; record++) {
        allTags += recordsToCount[record].conversationTags;
    }
    for (let tag = 0; tag < tagsList.length; tag++) {
        let tagRegex = new RegExp(tagsList[tag], "gm");
        if (tagRegex.test(allTags)) {
            let tagCount = allTags.match(tagRegex).length;
            countedTagsList.push({ [tagsList[tag]]: tagCount });
        }
    }
    await buildTable(countedTagsList, "tags");
    savedCountedTagsList = [...countedTagsList];
    countedTagsList = [];
}
// COUNT TAGS FUNCTION END

// BUILD DATA TABLES FUNCTION START
async function buildTable(dataToWork, tableType) {
    let content = '';

    // build CATEGORIES table START
    if (tableType === "categories") {
        let catSum = 0;
        for (let c = 0; c < dataToWork.length; c++) catSum += parseInt(Object.values(dataToWork[c]));
        getE('#data-table-1').firstElementChild.nextElementSibling.innerHTML = "";
        for (let i = 0; i < Object.keys(dataToWork).length; i++) {
            let catLabel = Object.keys(dataToWork[i]).toString(),
                catCount = Object.values(dataToWork[i]).toString(),
                percent = ((catCount / catSum) * 100);
            content += `<tr><td>${catLabel}</td><td>${catCount}</td><td>${roundNum(percent)}%</td></tr>`;
        }
        content += `<tr><td>Разом категорій</td><td>${catSum} шт.</td><td></td></tr>`;
        getE('#data-table-1').firstElementChild.nextElementSibling.innerHTML = content;
    }
    // build CATEGORIES table END

    // build MANAGERS PERFORMANCE table START
    if (tableType === "managers") {
        let convSum = 0, teamAvgConvTime = 0, teamAvgFirsrRespTime = 0;
        for (let c = 0; c < dataToWork.length; c++) convSum += dataToWork[c][Object.keys(dataToWork[c]).toString()].convCount;
        getE('#data-table-2').firstElementChild.nextElementSibling.innerHTML = "";
        for (let i = 0; i < dataToWork.length; i++) {
            let managerLabel = Object.keys(dataToWork[i]).toString(),
                managerChatsCount = dataToWork[i][managerLabel].chatsCount,
                managerTicketsCount = dataToWork[i][managerLabel].ticketsCount,
                managerConvCount = dataToWork[i][managerLabel].convCount,
                managerAvgConvTime = dataToWork[i][managerLabel].avgConvTime,
                managerAvgFirsrRespTime = dataToWork[i][managerLabel].avgFirstResp,
                percent = ((managerConvCount / convSum) * 100);
            content += `<tr>
            <td>${managerLabel}</td>
            <td>${managerChatsCount}</td>
            <td>${managerTicketsCount}</td>
            <td>${managerConvCount}</td>
            <td>${roundNum(percent)}%</td>
            <td>${roundNum(managerAvgConvTime)} хв</td>
            <td>${roundNum(managerAvgFirsrRespTime)} хв</td></tr>`;
            teamAvgConvTime += managerAvgConvTime;
            teamAvgFirsrRespTime += managerAvgFirsrRespTime;
        }
        teamAvgConvTime /= dataToWork.length;
        teamAvgFirsrRespTime /= dataToWork.length;
        content += `<tr>
        <td></td><td></td><td>Разом звернень</td><td>${convSum} шт.</td>
        <td>Середні значення</td><td>${roundNum(teamAvgConvTime)} хв</td><td>${roundNum(teamAvgFirsrRespTime)} хв</td></tr>`;
        getE('#data-table-2').firstElementChild.nextElementSibling.innerHTML = content;
    }
    // build MANAGERS PERFORMANCE table END

    // build TAGS table START
    if (tableType === "tags") {
        let tagsSum = 0;
        for (let c = 0; c < Object.keys(dataToWork).length; c++) tagsSum += parseInt(Object.values(dataToWork[c]));
        getE('#data-table-3').firstElementChild.nextElementSibling.innerHTML = "";
        for (let i = 0; i < Object.keys(dataToWork).length; i++) {
            let tagLabel = Object.keys(dataToWork[i]).toString(),
                labelCount = Object.values(dataToWork[i]).toString(),
                percent = ((labelCount / tagsSum) * 100);
            content += `<tr><td>${tagLabel}</td><td>${labelCount}</td><td>${roundNum(percent)}%</td></tr>`;
        }
        content += `<tr><td>Разом міток</td><td>${tagsSum} шт.</td><td></td></tr>`;
        getE('#data-table-3').firstElementChild.nextElementSibling.innerHTML = content;
    }
    // build TAGS table END

}
// BUILD DATA TABLES FUNCTION END

// FIND CHATS FOR MERGING FUNCTION START
let mergingArr = [];
async function findChatsForMerge(arrToWork) {
    let mergingObj = {}, projectsArr = [];

    for (const key of projectsList) mergingObj[key] = [];
    for (let record = 0; record < arrToWork.length; record++) {
        for (const key in mergingObj) {
            if (key === arrToWork[record].projectName) {
                mergingObj[key].push(arrToWork[record]);
            }
        }
    }

    for (const key in mergingObj) projectsArr.push(key);

    let count = 0;
    start:
    for (let proj = count; proj < projectsArr.length; proj++) {
        let curProj = projectsArr[proj];
        mergingObj[curProj].sort((a, b) => a.customerId.toLowerCase() < b.customerId.toLowerCase() ? -1 : 1);
        let count = 0;
        for (let i = 0; i < mergingObj[curProj].length; i++) {
            let currID = mergingObj[curProj][i].customerId,
                currTime = mergingObj[curProj][i].specialFields.createdAtMilis;
            for (let a = 0; a < mergingObj[curProj].length; a++) {
                let compareID = mergingObj[curProj][a].customerId,
                    compareTime = mergingObj[curProj][a].specialFields.createdAtMilis;
                if (currID === compareID) count++;
                else count = 0;
                if (count > 1) {
                    if (currTime - compareTime < 0 && currTime - compareTime > -86400000) {
                        if (!mergingArr.includes(mergingObj[curProj][i]) &&
                            !mergingArr.includes(mergingObj[curProj][a])) {
                            mergingArr.push(mergingObj[curProj][i], mergingObj[curProj][a]);
                        }
                    }
                    if (currTime - compareTime > 0 && currTime - compareTime < 86400000) {
                        if (!mergingArr.includes(mergingObj[curProj][i]) &&
                            !mergingArr.includes(mergingObj[curProj][a])) {
                            mergingArr.push(mergingObj[curProj][i], mergingObj[curProj][a]);
                        }
                    }
                }
            }
        }
        // setTimeout(() => {
        count++;
        // }, 100);
        continue start;
    }

    dialogContainer.classList.add('hide');
    return mergingArr;
}
// FIND CHATS FOR MERGING FUNCTION END

// SORT STRING COLUMN FUNCTION START
let arrowUp = "&#11205",
    arrowDown = "&#11206";
async function sortColumnStr(e, recordsToSort) {
    let sortedRecords;
    if (e.target.getAttribute('name') === "false") {
        sortedRecords = recordsToSort.sort((a, b) => Object.keys(a)[0].toLowerCase() < Object.keys(b)[0].toLowerCase() ? 1 : -1);
        e.target.setAttribute('name', true);
        e.target.firstElementChild.innerHTML = arrowUp;
    }
    else if (e.target.getAttribute('name')) {
        sortedRecords = recordsToSort.sort((a, b) => Object.keys(a)[0].toLowerCase() < Object.keys(b)[0].toLowerCase() ? -1 : 1);
        e.target.setAttribute('name', false);
        e.target.firstElementChild.innerHTML = arrowDown;
    }
    let parent = e.target.parentNode;
    for (let elem = 0; elem < parent.children.length; elem++) {
        if (parent.children[elem] !== e.target) {
            parent.children[elem].setAttribute('name', true);
            parent.children[elem].firstElementChild.innerHTML = "";
        }
    }
    if (recordsToSort === savedCountedCategoriesList) {
        await buildTable(sortedRecords, "categories");
    }
    if (recordsToSort === savedCountedManagersPerfList) {
        await buildTable(sortedRecords, "managers");
    }
    if (recordsToSort === savedCountedTagsList) {
        await buildTable(sortedRecords, "tags");
    }
}
// SORT STRING COLUMN FUNCTION END

// SORT NUMBER COLUMN FUNCTION START
async function sortColumnNum(e, recordsToSort, sortBy) {
    let sortedRecords;
    if (e.target.getAttribute('name') === "false") {
        (sortBy === "") ?
            sortedRecords = recordsToSort.sort(function (a, b) { return a[Object.keys(a)[0]] - b[Object.keys(b)[0]] }) :
            sortedRecords = recordsToSort.sort(function (a, b) { return a[Object.keys(a)[0]][sortBy] - b[Object.keys(b)[0]][sortBy] });
        e.target.setAttribute('name', true);
        e.target.firstElementChild.innerHTML = arrowUp;
    }
    else if (e.target.getAttribute('name')) {
        (sortBy === "") ?
            sortedRecords = recordsToSort.sort(function (a, b) { return b[Object.keys(b)[0]] - a[Object.keys(a)[0]] }) :
            sortedRecords = recordsToSort.sort(function (a, b) { return b[Object.keys(b)[0]][sortBy] - a[Object.keys(a)[0]][sortBy] });
        e.target.setAttribute('name', false);
        e.target.firstElementChild.innerHTML = arrowDown;
    }
    let parent = e.target.parentNode;
    for (let elem = 0; elem < parent.children.length; elem++) {
        if (parent.children[elem] !== e.target) {
            parent.children[elem].setAttribute('name', true);
            parent.children[elem].firstElementChild.innerHTML = "";
        }
    }
    if (recordsToSort === savedCountedCategoriesList) {
        await buildTable(sortedRecords, "categories");
    }
    if (recordsToSort === savedCountedManagersPerfList) {
        await buildTable(sortedRecords, "managers");
    }
    if (recordsToSort === savedCountedTagsList) {
        await buildTable(sortedRecords, "tags");
    }
}
// SORT NUMBER COLUMN FUNCTION END

// getE('.start-instraction-block').style.display = "none";
// getE('.left').style.display = "none";
// getE('.data-main').classList.remove("hide");
// buildFilteringSection();
function moreOptions() { }