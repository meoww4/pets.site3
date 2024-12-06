import React, { useState } from 'react';

function Dobav() {
    const [petName, setPetName] = useState('');
    const [chipNumber, setChipNumber] = useState('');
    const [region, setRegion] = useState('');
    const [date, setDate] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handlePetFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        alert('Объявление успешно добавлено!');
        window.location.href = 'search.html';
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        alert('Регистрация успешна!');
        window.location.href = 'profile.html';
    };

    return (
        <div>
            <div className="content-container-add-pet">
                <div className="header-container">
                    <h2>Добавить объявление</h2>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">Зарегистрироваться</button>
                </div>
                <form id="petForm" className="needs-validation" onSubmit={handlePetFormSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="petName" className="form-label">Имя животного</label>
                        <input
                            type="text"
                            className="form-control"
                            id="petName"
                            placeholder="Например, Барсик"
                            required
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, введите имя животного.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="chipNumber" className="form-label">Номер чипа</label>
                        <input
                            type="text"
                            className="form-control"
                            id="chipNumber"
                            placeholder="например, 6 ha-221-spb"
                            pattern="^[a-zA-Z0-9\-]+$"
                            required
                            value={chipNumber}
                            onChange={(e) => setChipNumber(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Номер чипа должен содержать только буквы, цифры и дефисы.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="region" className="form-label">Район</label>
                        <input
                            type="text"
                            className="form-control"
                            id="region"
                            placeholder="Центральный"
                            required
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, укажите район.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Дата</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, укажите дату.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="animalType" className="form-label">Вид животного</label>
                        <input
                            type="text"
                            className="form-control"
                            id="animalType"
                            placeholder="Собака, кошка и т.д."
                            required
                            value={animalType}
                            onChange={(e) => setAnimalType(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, укажите вид животного.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Фото животного</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            accept="image/*"
                            required
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, загрузите фото животного.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Описание</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows={4}
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, предоставьте описание.
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary" type="submit">Опубликовать</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Dobav;
