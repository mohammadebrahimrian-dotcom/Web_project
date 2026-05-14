// ================= FEATURES =================
const features = [{
        icon: "👨🏼‍🤝‍👨🏽",
        title: "د مشتریانو مدیریت",
        description: "دټولو مشتریانو معلومات، حالت، او حسابونه آسانه مدیریت کړی",
    },
    {
        icon: "📱",
        title: "د سیمکارتونو مدیریت",
        description: "سیمکارتونه راجسټر کړئ، فعال او غیر فعال کړئ، اوپه هر څه یی سمبال کړی",
    },
    {
        icon: "📞",
        title: "د غوښتنلیکونو تعقیب",
        description: "دټولو غوښتنلیکونو ریکارډونه وګورئ او تحلیل کړی",
    },
    {
        icon: "💌",
        title: "د میسجونومدیریت",
        description: "میسجونه راولیږئ، وګورئ،او مدیریت کړی",
    },
    {
        icon: "🌐",
        title: "انټرنیټ ډیټا بسته",
        description: "دانټرنیټ ډیټا بسته ایجاد کړئ، تخصیص کړئ، او مدیریت کړی",
    },
    {
        icon: "💵",
        title: "بیل سیستم",
        description: "بیل حسابونه جوړ کړئ، تایدیات تعقیب کړئ، او حسابونه سمبال کړی",
    },
];
// ================= LOCAL STORAGE INIT =================
if (!localStorage.getItem("customers")) {
    localStorage.setItem(
        "customers",
        JSON.stringify([{
                name: "احمد خان",
                phone: "0700123456",
                balance: 1500,
                status: "active",
            },
            { name: "محمدی", phone: "0700234567", balance: 2300, status: "active" },
            { name: "علی", phone: "0700345678", balance: 0, status: "blocked" },
        ]),
    );
}

if (!localStorage.getItem("users")) {
    localStorage.setItem(
        "users",
        JSON.stringify([{ username: "admin", password: "1234" }]),
    );
}

// ================= MAIN =================
document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.getElementById("featuresContainer");
    const customersContainer = document.getElementById("customersContainer");
    const simcardsContainer = document.getElementById("simcardsContainer");

    const billingContainer = document.getElementById("billingContainer");
    const modulesContainer = document.getElementById("modulesContainer");

    const testimonialsContainer = document.getElementById(
        "testimonialsContainer",
    );
    const faqContainer = document.getElementById("faqContainer");

    // ================= FEATURES =================
    if (featuresContainer) {
        featuresContainer.textContent = "";

        for (const f of features) {
            const card = document.createElement("div");
            card.className = "feature-card";

            const icon = document.createElement("div");
            icon.textContent = f.icon;

            const title = document.createElement("h3");
            title.textContent = f.title;

            const desc = document.createElement("p");
            desc.textContent = f.description;

            card.append(icon);
            card.append(title);
            card.append(desc);

            featuresContainer.append(card);
        }
    }
    // ================= CUSTOMERS =================
    if (customersContainer) {
        const customers = [{
                name: "احمد خان",
                status: "فعال",
                phone: "0700123456",
                balance: "1,500 افغانی",
            },
            {
                name: "محمدی",
                status: "فعال",
                phone: "0700234567",
                balance: "2,300 افغانی",
            },
            {
                name: "علی",
                status: "بلاک شوی",
                phone: "0700345678",
                balance: "0 افغانی",
            },
        ];

        customersContainer.textContent = "";

        for (const c of customers) {
            const card = document.createElement("div");
            card.className = "customer-card";

            // Header
            const header = document.createElement("div");
            header.className = "customer-header";

            const name = document.createElement("span");
            name.className = "customer-name";
            name.textContent = c.name;

            const status = document.createElement("span");
            status.textContent = c.status;

            const statusClass =
                c.status === "فعال" ? "status-active" : "status-blocked";

            status.className = `customer-status ${statusClass}`;

            header.append(name);
            header.append(status);

            // Info container
            const info = document.createElement("div");
            info.className = "customer-info";

            // Phone
            const phoneBox = document.createElement("div");
            phoneBox.className = "customer-info-item";

            const phoneLabel = document.createElement("span");
            phoneLabel.textContent = "تلیفون";

            const phoneValue = document.createElement("span");
            phoneValue.textContent = c.phone;

            phoneBox.append(phoneLabel);
            phoneBox.append(phoneValue);

            // Balance
            const balanceBox = document.createElement("div");
            balanceBox.className = "customer-info-item";

            const balanceLabel = document.createElement("span");
            balanceLabel.textContent = "بیلانس";

            const balanceValue = document.createElement("span");
            balanceValue.textContent = c.balance;

            balanceBox.append(balanceLabel);
            balanceBox.append(balanceValue);

            // assemble
            info.append(phoneBox);
            info.append(balanceBox);

            card.append(header);
            card.append(info);

            customersContainer.append(card);
        }
    }
    // ================= SIMCARDS =================
    if (simcardsContainer) {
        const simcards = [
            { number: "0700123456", owner: "احمد خان", status: "فعال" },
            { number: "0700234567", owner: "محمدی", status: "فعال" },
            { number: "0700345678", owner: "محمد علی", status: "غیر فعال" },
            { number: "0700456789", owner: "احمد", status: "فعال" },
            { number: "0700567890", owner: "عبدالله", status: "فعال" },
            { number: "0700678901", owner: "کریم", status: "غیر فعال" },
            { number: "0700567890", owner: "خان", status: "فعال" },
            { number: "0700678901", owner: "جانان", status: "غیر فعال" },
        ];

        simcardsContainer.textContent = "";

        for (const s of simcards) {
            const card = document.createElement("div");
            card.className = "simcard";

            // Header
            const header = document.createElement("div");
            header.className = "simcard-header";

            const icon = document.createElement("span");
            icon.className = "simcard-icon";
            icon.textContent = "📱";

            const status = document.createElement("span");

            const statusClass = s.status === "فعال" ? "active" : "inactive";

            status.className = `simcard-status ${statusClass}`;
            status.textContent = s.status;

            header.append(icon);
            header.append(status);

            // Number
            const number = document.createElement("div");
            number.className = "simcard-number";
            number.textContent = s.number;

            // Owner
            const owner = document.createElement("div");
            owner.className = "simcard-owner";
            owner.textContent = s.owner;

            // Assemble
            card.append(header);
            card.append(number);
            card.append(owner);

            simcardsContainer.append(card);
        }
    }

    // ================= BILLING =================
    if (billingContainer) {
        const bills = [
            { customer: "احمد خان", status: "paid", total: 1500, balance: 0 },
            { customer: "محمدی", status: "pending", total: 2300, balance: 2300 },
            { customer: "محمد", status: "overdue", total: 500, balance: 500 },
        ];

        billingContainer.textContent = "";

        for (const b of bills) {
            const card = document.createElement("div");
            card.className = "billing-card";

            // Header
            const header = document.createElement("div");
            header.className = "billing-header";

            const customer = document.createElement("span");
            customer.className = "billing-customer";
            customer.textContent = b.customer;

            const status = document.createElement("span");

            let statusText = "";

            if (b.status === "paid") statusText = "تاید شوی";
            if (b.status === "pending") statusText = "پاتې";
            if (b.status === "overdue") statusText = "د وخت تیر";

            status.className = `billing-status ${b.status}`;
            status.textContent = statusText;

            header.append(customer);
            header.append(status);

            // Details
            const details = document.createElement("div");
            details.className = "billing-details";

            const total = document.createElement("div");
            total.textContent = `تایدکس: ${b.total} افغانی`;

            const balance = document.createElement("div");
            balance.textContent = `بیلانس: ${b.balance} افغانی`;

            details.append(total);
            details.append(balance);

            // Assemble
            card.append(header);
            card.append(details);

            billingContainer.append(card);
        }
    }

    // ================= MODULES =================
    if (modulesContainer) {
        const modules = [
            { icon: "👨🏼‍🤝‍👨🏽", title: "مشتری ماډل" },
            { icon: "📱", title: "سیمکارت ماډل" },
            { icon: "📞", title: "غږ ماډل" },
            { icon: "💌", title: "میسجونه ماډل" },
            { icon: "🌐", title: "ډیټا ماډل" },
            { icon: "💵", title: "بیل ماډل" },
        ];

        modulesContainer.textContent = "";

        for (const m of modules) {
            const card = document.createElement("div");
            card.className = "module-card";

            const icon = document.createElement("div");
            icon.textContent = m.icon;

            const title = document.createElement("h3");
            title.textContent = m.title;

            card.append(icon);
            card.append(title);

            modulesContainer.append(card);
        }
    }

    // ================= FAQ =================
    if (faqContainer) {
        const faqs = [{
                q: "ایا زموږ معلومات خوندي دي؟",
                a: "هو، زموږ سیستم ټولو معلوماتو خوندي او کرپټ شوي ساتي. موږ د امنیت لپاره پرمختللي ټیکنالوژي کاروو",
            },
            {
                q: "ایا زه کولای شم هر وخت بشپړ کړم؟",
                a: "هو، تاسو کولای شئ هر وخت خپل اشتراک بشپړ کړئ. هیڅ د درېځو یا جریمه نشته",
            },
            {
                q: "ایا سیستم باور وړ دی؟",
                a: "هو، زموږ سیستم 99.9% د وخت فعالیت لري. موږ د 24/7 ملاتړ ټیم لرو",
            },
        ];

        faqContainer.textContent = "";

        for (const f of faqs) {
            const item = document.createElement("div");
            item.className = "faq-item";

            const question = document.createElement("div");
            question.className = "faq-question";
            question.textContent = f.q;

            const answer = document.createElement("div");
            answer.className = "faq-answer";
            answer.textContent = f.a;

            // toggle functionality
            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });

            item.append(question);
            item.append(answer);

            faqContainer.append(item);
        }
    }
    // ================= TESTIMONIALS =================

    if (testimonialsContainer) {

        const loadTestimonials = async() => {
            try {

                const res = await fetch("api/testimonials.json");
                const data = await res.json();

                testimonialsContainer.textContent = "";

                for (const t of data) {

                    const card = document.createElement("div");
                    card.className = "testimonial-card";

                    const text = document.createElement("p");
                    text.textContent = t.text;

                    const info = document.createElement("div");

                    const avatar = document.createElement("span");
                    avatar.textContent = t.avatar;

                    const name = document.createElement("h4");
                    name.textContent = t.name;

                    const role = document.createElement("p");
                    role.textContent = t.role;

                    info.append(avatar);
                    info.append(name);
                    info.append(role);

                    card.append(text);
                    card.append(info);

                    testimonialsContainer.append(card);
                }

            } catch (err) {
                console.error("API Error:", err);
            }
        };

        loadTestimonials();
    }
    // ================= OBJECTIVES =================


    const objectivesContainer = document.getElementById("objectivesContainer");

    if (!objectivesContainer) return;

    const objectives = [{
            icon: "📺",
            title: "د ټولو خدماتو اتوماتیزیشن",
            desc: "دمخابراتي خدماتو ټولو برخو اتوماتیک او منظم مدیریت",
        },
        {
            icon: "🛃",
            title: "د مشتری تجربه بهترول",
            desc: "مشتریانو ته ښه خدمت او آسانه سیستم وړاندی کول",
        },
        {
            icon: "📊",
            title: "چټک راپور او نظارت",
            desc: "د ټولو فعالیتونو تفصیلي راپورونه او نظارت",
        },
    ];

    objectivesContainer.textContent = "";

    for (const o of objectives) {

        const card = document.createElement("div");
        card.className = "objective-card";

        const icon = document.createElement("div");
        icon.className = "objective-icon";
        icon.textContent = o.icon;

        const title = document.createElement("h3");
        title.textContent = o.title;

        const desc = document.createElement("p");
        desc.textContent = o.desc;

        card.append(icon);
        card.append(title);
        card.append(desc);

        objectivesContainer.append(card);
    }
});