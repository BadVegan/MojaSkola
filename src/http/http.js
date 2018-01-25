import axios from 'axios';

const URL = 'http://localhost:3333/groups/';

export function getGroups() {
    return axios
        .get(URL);
}

export function addGroup(name) {
    const group = {name: name};
    return axios.post(URL, group);
}

export function deleteGroup(groupId) {
    return axios.delete(URL + groupId);
}

export function editGroup(id, name) {
    return axios.patch(URL + id, {name: name});
}


export function changeGroup(idGroup, idStudent) {

    return axios.get('http://localhost:3004/listGroup').then(res => {
        let student;
        const groups = res.data.map(g => {
            const newStudents = g.students.filter(s => {
                if (s.id === idStudent) {
                    student = s;
                } else {
                    return s;
                }
            });
            g.students = newStudents;
            return g;
        });
        groups.forEach(group => {
            if (group.id === idGroup) {
                group.students.push(student);
                return;
            }
        });
        console.log('http', groups)
        return groups;
    }).catch(err => console.log(err));

}

export function fetchGroupsName() {
    return axios
        .get('http://localhost:3004/listGroup').then(res => {
            return res.data.map(group => {
                return {key: group.id, value: group.id, text: group.name}
            })
        })
}



