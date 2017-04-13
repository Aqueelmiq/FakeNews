#Python 2.7.3

import enum

class Ratings(enum.Enum):
		RECOMMENDED = "recommended"
		NOT_RECOMMENDED = "not recommended"
		UNCERTAIN = "uncertain"