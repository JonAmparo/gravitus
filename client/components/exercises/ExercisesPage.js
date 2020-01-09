import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FiUser, FiUsers } from 'react-icons/fi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Tabs from '../util/Tabs';
// import styled from '@emotion/styled';
import Slider from 'react-slick';
import Dashboard from '../chart/Index';

// const Images = styled.img`
//   height: 125px;
//   width: 125px;
// `;

function ExercisesPage(props) {
  const { exercises } = props.location.state;

  return (
    <React.Fragment>
      <div className='text-center'>
        <h1>{exercises.name}</h1>
        <Tabs
          activeTab={{
            id: 'tab1'
          }}
        >
          <Tabs.Tab id='tab1' title={<IoIosInformationCircleOutline />}>
            <ExerciseInfo exercises={exercises} />
          </Tabs.Tab>
          <Tabs.Tab id='tab2' title={<FiUser />}>
            <Dashboard />
          </Tabs.Tab>
          <Tabs.Tab id='tab3' title={<FiUsers />}>
            <p>Placeholder #3</p>
            <Exercise3 exercises={exercises} />
          </Tabs.Tab>
          <Tabs.Tab id='tab4' title={<AiOutlineTrophy />}>
            <p>Placeholder #4</p>
          </Tabs.Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
}

function ExerciseInfo({ exercises }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='text-left'>
      <Slider {...settings} className='my-5'>
        <div>
          <img
            className='img-fluid'
            src={exercises.image}
            alt={exercises.name + 'exercise'}
          />
        </div>
        <div>
          <img
            className='img-fluid'
            src='https://picsum.photos/id/1079/4496/3000'
            alt={exercises.name + 'exercise'}
          />
        </div>
        <div>
          <img
            className='img-fluid'
            src={exercises.image}
            alt={exercises.name + 'exercise'}
          />
        </div>
          <div>
          <img
            className='img-fluid'
            src={exercises.image}
            alt={exercises.name + 'exercise'}
          />
        </div>
        <div>
          <img
            className='img-fluid'
            src={exercises.image}
            alt={exercises.name + 'exercise'}
          />
        </div>
        <div>
          <img
            className='img-fluid'
            src='https://picsum.photos/id/1083/4496/3000'
            alt={exercises.name + 'exercise'}
          />
        </div>
      </Slider>
      <h4>Instructions:</h4>
      <p>{exercises.description}</p>
      <h4>Tips:</h4>
      <p>
        If you are new at this exercise, it is advised that you use a spotter.
        If no spotter is available, then be conservative with the amount of
        weight used.
      </p>
      <p>
        Also, beware of letting the bar drift too far forward. You want the bar
        to touch your middle chest and nowhere else.
      </p>
      <p>
        Don't bounce the weight off your chest. You should be in full control of
        the barbell at all times.
      </p>
    </div>
  );
}

function Exercise3({ exercises }) {
  return <div className='text-left'>exercise 3</div>;
}

export default ExercisesPage;
