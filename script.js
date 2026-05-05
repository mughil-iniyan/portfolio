document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        "Java (OOP/Collections)", "Python (Pandas/NumPy)", "MySQL (Optimization)", 
        "Power BI (DAX)", "Spring Boot", "REST APIs", "JUnit Testing", 
        "Machine Learning", "Scikit-learn", "IoT/Arduino", "ETL Pipelines"
    ];

    const cloud = document.getElementById('skill-cloud');
    skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.innerText = skill;
        cloud.appendChild(tag);
    });
});
