import React from "react";
import { BigTitle, SectionTitle } from "@/components";

import "./style.scss";

export const Featured = () => {
  return (
    <div className="featured">
      <SectionTitle size="20px">Featured</SectionTitle>
      <BigTitle>New Arrival</BigTitle>

      <div className="featured__content">
        <div className="featured__content__left">
          <img
            className="featured__content__left__img"
            src="/images/arrival-play.svg"
            alt="playstation"
          />
          <div className="featured__content__left__text-container">
            <h2 className="featured__content__left__text-container__title">
              PlayStation 5
            </h2>
            <p className="featured__content__left__text-container__text">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="featured__content__left__text-container__btn">
              <span>Shop Now</span>
            </button>
          </div>
        </div>

        <div className="featured__content__right">
          <div className="featured__content__right--women">
            <img
              className="featured__content__right--women__img"
              src="/images/women.svg"
              alt="women"
            />
            <div className="featured__content__right--women__text-container">
              <h2 className="featured__content__right--women__text-container__title">
                Women’s Collections
              </h2>
              <p className="featured__content__right--women__text-container__text">
                Featured woman collections that give you another vibe.
              </p>
              <button className="featured__content__right--women__text-container__btn">
                <span>Shop Now</span>
              </button>
            </div>
          </div>

          <div className="featured__content__right--bottom">
            <div className="featured__content__right--bottom__left">
              <img
                className="speaker-img"
                src="/images/arrival-speakers.svg"
                alt="speaker"
              />
              <div className="featured__content__right--bottom__text-container">
                <h2 className="featured__content__right--bottom__text-container__title">
                  Speakers
                </h2>
                <p className="featured__content__right--bottom__text-container__text">
                  Amazon wireless speakers
                </p>
                <button className="featured__content__right--bottom__text-container__btn">
                  <span>Shop Now</span>
                </button>
              </div>
            </div>

            <div className="featured__content__right--bottom__right">
              <img
                className="perfume-img"
                src="/images/arrival-gucci.svg"
                alt="gucci"
              />
              <div className="featured__content__right--bottom__text-container">
                <h2 className="featured__content__right--bottom__text-container__title">
                  Perfume
                </h2>
                <p className="featured__content__right--bottom__text-container__text">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="featured__content__right--bottom__text-container__btn">
                  <span>Shop Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
