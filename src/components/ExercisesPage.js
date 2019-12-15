import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FiUser, FiUsers } from 'react-icons/fi';
import { AiOutlineTrophy } from 'react-icons/ai';
import Tabs from './Tabs';
import glamorous from 'glamorous';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dashboard from './Chart/Index';

const images = {};

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
            <glamorous.Div padding={20}>
              <ExerciseInfo exercises={exercises} />
            </glamorous.Div>
          </Tabs.Tab>
          <Tabs.Tab id='tab2' title={<FiUser />}>
            <glamorous.Div padding={20}>
              <Dashboard />
            </glamorous.Div>
          </Tabs.Tab>
          <Tabs.Tab id='tab3' title={<FiUsers />}>
            <glamorous.Div padding={20}>
              <p>Placeholder #3</p>
              <Exercise3 exercises={exercises} />
            </glamorous.Div>
          </Tabs.Tab>
          <Tabs.Tab id='tab4' title={<AiOutlineTrophy />}>
            <glamorous.Div padding={20}>
              <p>Placeholder #4</p>
            </glamorous.Div>
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
          <img className='img-fluid' src={exercises.image} />
        </div>
        <div>
          <img className='img-fluid' src={exercises.image} />
        </div>
        <div>
          <img className='img-fluid' src={exercises.image} />
        </div>
        <div>
          <img className='img-fluid' src={exercises.image} />
        </div>
        <div>
          <img className='img-fluid' src={exercises.image} />
        </div>
        <div>
          <img
            className='img-fluid'
            src='https://picsum.photos/id/1079/4496/3000'
          />
        </div>
      </Slider>
      {/* <img
        className=''
        style={{ width: '100%', height: '400px' }}
        src={exercises.image}
        alt={exercises.name}
      /> */}
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
