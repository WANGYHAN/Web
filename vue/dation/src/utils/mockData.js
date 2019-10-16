import {
    Random
} from "mockjs";

export function mockTableData() {
    let job = ["PM", "OP", "RD"];
    let list = [];
    for (let i = 0; i < 20; i++) {
        let it = {
            name: Random.cname(),
            id: Random.id(),
            job: job[Random.integer(0, 2)]
        };
        list.push(it);
    }
    return list;
}

export function mockUser() {
    let user = {
        name: Random.cname(),
        id: Random.id(),
        email: Random.email(),
        tel: `13${Random.integer(3, 9)}${Random.string("number", 8)}`,
        lastLoginDate: `2019-${Random.date("MM-dd")} ${Random.time()}`,
        lastLoginIP: Random.ip()
    };

    return user;
}

export function mockModule() {
    let moduleName = [
        "网络模块1",
        "网络模块2",
        "网络模块3",
        "网络模块4",
        "公共交通模块",
        "小区安保模块",
        "实时通讯1",
        "实时通讯2",
        "实时通讯3",
        "实时通讯4",
        "个人信息安全模块"
    ];
    let modules = [];
    for (let i = 0; i < moduleName.length; i++) {
        let it = {
            name: moduleName[i],
            id: Random.string("number", 6),
            description: Random.title(10),
            depandency: [
                Random.string("number", 6),
                Random.string("number", 6),
                Random.string("number", 6)
            ]
        };

        modules.push(it);
    }
    return modules;
}

export function mockOneModule() {
    let name = [
        "网络模块1",
        "公共交通模块",
        "小区安保模块",
        "实时通讯1",
        "个人信息安全模块"
    ];
    let it = {
        name: name[Random.integer(0, 4)],
        id: Random.string("number", 6),
        description: Random.title(10),
        createDate: `2019-${Random.date("MM-dd")} ${Random.time()}`,
        depandency: [{
                name: name[Random.integer(0, 4)] + Random.integer(0, 4),
                id: Random.string("number", 6)
            },
            {
                name: name[Random.integer(0, 4)] + Random.integer(0, 4),
                id: Random.string("number", 6)
            },
            {
                name: name[Random.integer(0, 4)] + Random.integer(0, 4),
                id: Random.string("number", 6)
            }
        ]
    };
    return it;
}

export function mockLicence() {
    let list = [];
    let type = ["长期", "临时", "时间段"];
    for (let i = 0; i < 10; i++) {
        list.push({
            name: Random.title(3),
            applicant: {
                id: Random.string("number", 6),
                name: Random.cname()
            },
            project: {
                id: Random.string("number", 6),
                name: Random.title(3)
            },
            client: {
                id: Random.string("number", 6),
                name: Random.cname()
            },
            licence: {
                id: Random.string("number", 6),
                name: Random.title(3)
            },
            module: [{
                    id: Random.string("number", 6),
                    name: Random.title(3)
                },
                {
                    id: Random.string("number", 6),
                    name: Random.title(3)
                },
                {
                    id: Random.string("number", 6),
                    name: Random.title(3)
                }
            ],
            creator: {
                id: Random.string("number", 6),
                name: Random.cname()
            },
            createDate: `2018-${Random.date("MM-dd")}`,
            expireDate: `2019-${Random.date("MM-dd")}`,
            type: type[Random.integer(0, 2)],
            approver: {
                id: Random.string("number", 6),
                name: Random.cname()
            }
        });
    }
    return list;
}

export function mockClinet() {
    let type = ["高级客户", "普通客户", "长期客户", "候选客户"];
    let list = [];
    for (let i = 0; i < 20; i++) {
        list.push({
            name: Random.cname(),
            id: Random.string("number", 6),
            type: type[Random.integer(0, 3)],
            location: Random.city(true),
            info: Random.title(10),
            contact: [{
                    type: "tel",
                    value: `13${Random.integer(3, 9)}${Random.string("number", 8)}`
                },
                {
                    type: "email",
                    value: Random.email()
                }
            ]
        });
    }
    return list;
}

export function mockProject() {
    let state = ["进行中", "挂起中", "已结束", "已终止"];
    let list = [];
    for (let i = 0; i < 5; i++) {
        list.push({
            name: Random.title(2),
            id: Random.string("number", 6),
            state: state[Random.integer(0, 3)],
            estimatedStartTime: `2017-${Random.date("MM-dd")} ${Random.time()}`,
            actualStartTime: `2017-${Random.date("MM-dd")} ${Random.time()}`,
            estimatedFinishTime: `2019-${Random.date("MM-dd")} ${Random.time()}`,
            actualFinishTime: `2019-${Random.date("MM-dd")} ${Random.time()}`,
            maintenanceTime: Random.integer(1, 4),
            contact: [{
                    name: Random.cname(),
                    note: Random.title(10),
                    tel: `13${Random.integer(3, 9)}${Random.string("number", 8)}`,
                    email: Random.email()
                },
                {
                    name: Random.cname(),
                    note: Random.title(10),
                    tel: `13${Random.integer(3, 9)}${Random.string("number", 8)}`,
                    email: Random.email()
                }
            ]
        });
    }
    return list;
}
