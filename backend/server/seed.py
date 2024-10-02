#!/usr/bin/env python3

from app import app
from models import db, Game

from faker import Faker

fake = Faker()

def createGame():
    Game.query.delete()

    games = []

    for i in range(10):
        game = Game(name = fake.name())

        games.append(game)

    db.session.add_all(games)
    db.session.commit()


def seed_database():
    createGame()


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        seed_database()