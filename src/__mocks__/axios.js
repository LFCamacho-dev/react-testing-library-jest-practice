const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Luis F",
                    last: "Camacho"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                login: {
                    username: "lfcamacho"
                }
            },
            {
                name: {
                    first: "Luis F",
                    last: "Camacho"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                login: {
                    username: "lfcamacho"
                }
            },
            {
                name: {
                    first: "Luis F",
                    last: "Camacho"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                login: {
                    username: "lfcamacho"
                }
            },
            {
                name: {
                    first: "Luis F",
                    last: "Camacho"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                login: {
                    username: "lfcamacho"
                }
            },
            {
                name: {
                    first: "Luis F",
                    last: "Camacho"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/35.jpg"
                },
                login: {
                    username: "lfcamacho"
                }
            },
        ]
    }
}

export default {
    get: jest.fn().mockReturnValue(mockResponse)
}