const list = document.querySelector('ul');
const form = document.querySelector('form');
const btn = document.querySelector('button');

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();

    let html = `<li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">Delete</button>
    </li>`;

    list.innerHTML += html;
}

const deleteRecipe = id => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    });
}

// get documents
// db.collection('recipes').get()
//     .then(snapshot => {
//         // when we have the data or response
//         snapshot.docs.forEach(doc => {
//             // console.log(doc.data());
//             // console.log(doc.id);
//             addRecipe(doc.data(), doc.id);
//         });
//     })
//     .catch(err => console.error(err));
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        // console.log(doc);
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    });
})

// add documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    form.reset();

    db.collection('recipes').add(recipe)
        .then(() => {
            console.log('recipe added to collection');
            // location.reload();
        }).catch(err => console.log(err));
});

// deleting data
list.addEventListener('click', e => {
    // console.log(e);
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete()
            .then(() => {
                console.log('item deleted');
            }).catch(err => console.log(err));
    }
});

// unsub from database changes
btn.addEventListener('click', e => {
    console.log('unsubscribed from db changes');
    unsub();
})