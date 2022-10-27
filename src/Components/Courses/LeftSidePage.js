import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidePage = ({courses}) => {
    
    return (
        <div>
           {
                    courses.map(course => <Link to={`course/${course.id}`} key={course.id}><p
                        className="text-xl font-semibold hover:bg-blue-200 rounded-lg p-3 m-4">
                        {course.name}
                    </p></Link>

                    )
                }
        </div>
    );
};

export default LeftSidePage;