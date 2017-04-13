import ratings
import re

class parser:
	def __init__(self, url):
		self.trusted_sources = ['cnn.com', 'bbc.co.uk']
		self.address = url
		self.leanings = []
	
	def parse(self):
		#Sends address to recommended and not recommended methods. 
		#Returns a recommendation
		r = self.recommended()
		nr = self.not_recommended()
		r_score = r - nr
		if r_score > 2:
			return Ratings.RECOMMENDED
		elif r_score < -2:
			return Ratings.NOT_RECOMMENDED
		else:
			return Ratings.UNCERTAIN
		
	def not_recommended(self):
		score = 0
		# Check for known urls
		if 'com.co' in self.address:
			score -=2
	
	def recommended(self):
		score = 0
		# Check for known urls
		score += 1
	
	def build_leanings_index(self, path):
		filename = path
		lines = open(filename).read()
		tokens = re.split('\t' ,lines.lower());
		entry = []
		iter = 0
		for t in tokens:
			entry.append(t)
			self.leanings.append(entry)
			entry = []
		
			
		
		
